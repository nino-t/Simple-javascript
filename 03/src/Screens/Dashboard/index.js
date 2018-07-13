import React from 'react'
import { number, date } from '../../lib'

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: ['Jakarta', 'Tokyo', 'London'],
			initalCityIndex: 0,
			dataActive: {}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	callAjax(key, URI){
		fetch(`${URI}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`)
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		[key]: data
	    	})
	    })
	    .catch((error) => {
	    	console.error('Error', error);
	    })
	}	

	componentWillMount() {
		const { cities, initalCityIndex } = this.state
		const city = cities[initalCityIndex]
		this.getActiveCity(city)
	}

	handleChange(e){
		const { cities } = this.state
		const city = cities[e.target.value]
		this.setState({
			initalCityIndex: e.target.value
		})

		this.getActiveCity(city)
	}

	getActiveCity(city){
		this.callAjax('dataActive', `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}`)
	}

	render() {
		const {dataActive, cities, initalCityIndex} = this.state
		const currentCity = cities[initalCityIndex]
		let tempTotal = 0
		let varTotal = 0

		return (
			<div className="container" style={{ marginTop:'100px' }}>
				<select className="form-control" defaultValue={initalCityIndex} onChange={this.handleChange}>
					{
						cities.map((city, index) => (
							<option value={index} key={index}>{city}</option>
						))
					}
				</select>
				<br />
				<table className="table table-hover table-bordered">
					<thead>
						<tr>
							<th>{currentCity}</th>
							<th>Temperature</th>
							<th>Variance</th>
						</tr>
					</thead>
					<tbody>
						{
							(dataActive.list) &&
								dataActive.list.map((item, index) => {
									const temp = number.toDecimal(item.temp.day)
									const vari = number.getDifference(item.temp.max, item.temp.min)

									tempTotal += parseFloat(temp)
									varTotal += parseFloat(vari)

									return(
										<tr key={index}>
											<td>{date.milliToDate(item.dt*1000)}</td>
											<td>{temp}C</td>
											<td>{vari}C</td>
										</tr>									
									)})
						}
					</tbody>
					<tfoot>
						{
							(dataActive.list) &&
								<tr>
									<th>Average</th>
									<th>{number.toDecimal(tempTotal/dataActive.list.length)}C</th>
									<th>{number.toDecimal(varTotal/dataActive.list.length)}C</th>
								</tr>															
						}					
					</tfoot>
				</table>
			</div>
		)
	}
}
