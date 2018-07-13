var Cart = require('../index.js')
describe('Test fitur cart', () => {
  it('Menambahkan Barang', () => {
    let cart = new Cart();
    let product = {
      name: 'Baju',
      qty: 1
    }

    cart.addProduct(product)
    expect(cart.showCart().length).toBeGreaterThan(0)
  })

  it('Menghapus Barang Barang', () => {
    let cart = new Cart();
    let product = 'Baju'
    cart.removeProduct(product)    
    expect(cart.findProduct(product)).toBeFalsy(`Barang ${product} gagal dihapus`)
  })  
})