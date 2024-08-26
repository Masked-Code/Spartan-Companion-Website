export default defineEventHandler(async (event) => {
  let contactData = {
    name: 'Tristan Duin',
    phone: '775-666-2662',
    email: 'trist13579@gmail.com',
    message: 'Hello there!'
  }
  return contactData
})
