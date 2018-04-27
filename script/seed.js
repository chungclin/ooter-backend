/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {Passenger} = require('../server/db/models')
const {Driver} = require('../server/db/models')


async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const drivers = await Promise.all([
    Driver.create({name: 'Chung Lin', email: 'cody@email.com', phoneNumber: '5167768965', originAddress: '5 Hanover Square, New York, NY, USA', originLAT: '40.7050758', originLONG: '-740091604', originRadius: '5', destinationAddress: 'San Francisco Bay Trail, San Francisco, CA, USA', destinationLAT: '37.7898112', destinationLONG: '-122.3884296', destinationRadius: '5'}),
    Driver.create({name: 'Mikey Smith', email: 'mikey@email.com', phoneNumber: '7168899098', originAddress: '900 Collins Ave, Miami, FL, USA', originLAT: '25.7795059', originLONG: '-80.1321725', originRadius: '5', destinationAddress: 'Empire State Building, New York, NY, USA', destinationLAT: '40.7485413', destinationLONG: '-73.9857577', destinationRadius: '10'}),
    Driver.create({name: 'Nicole Hoo', email: 'nicole@email.com', phoneNumber: '9177768976', originAddress: 'Pike Place, Seattle, WA, USA', originLAT: '47.60955189999999', originLONG: '-122.3419743', originRadius: '10', destinationAddress: 'Zoo Center, Bronx, NY, USA', destinationLAT: '40.8514961', destinationLONG: '-73.879441', destinationRadius: '25'}),
    Driver.create({name: 'Granny Smith', email: 'granny@email.com', phoneNumber: '9098761234', originAddress: '140 Northern Boulevard, Glen Head, NY, USA', originLAT: '40.8249097', originLONG: '-73.58859869999999', originRadius: '5', destinationAddress: '10 Rodeo Drive, Beverly Hills, Los Angeles, CA, USA', destinationLAT: '34.06706310000001', destinationLONG: '-118.4012429', destinationRadius: '2'}),
    Driver.create({name: 'Magic Mike', email: 'magic@email.com', phoneNumber: '7168897652', originAddress: '20 Sweetman Avenue, Elmont, NY, USA', originLAT: '40.7013682', originLONG: '-74.05830379999999', originRadius: '25', destinationAddress: 'Central Park West, New York, NY, USA', destinationLAT: '40.7848582', destinationLONG: '-73.9696519', destinationRadius: '10'}),
    Driver.create({name: 'Pretty Girl', email: 'pretty@email.com', phoneNumber: '9039878903', originAddress: 'Liberty Avenue, Jersey City, NJ, USA', originLAT: '40.7479798', originLONG: '-83.72714409999999', originRadius: '10', destinationAddress: '10 Rodeo Drive, Beverly Hills, Los Angeles, CA, USA', destinationLAT: '34.06706310000001', destinationLONG: '-118.4012429', destinationRadius: '5'}),
    Driver.create({name: 'Peter Pop', email: 'pety@email.com', phoneNumber: '2129890876', originAddress: 'Zoo Center, Bronx, NY, USA', originLAT: '40.8514961', originLONG: '-73.879441', originRadius: '5', destinationAddress: 'San Francisco – Oakland Bay Bridge, San Francisco, CA, USA', destinationLAT: '37.8003575', destinationLONG: '-122.3755184', destinationRadius: '5'}),
    Driver.create({name: 'Full Stack', email: 'fsa@email.com', phoneNumber: '7182877862', originAddress: '20 Sweetman Avenue, Elmont, NY, USA', originLAT: '40.7013682', originLONG: '-74.05830379999999', originRadius: '10', destinationAddress: '5358 194th Street, Flushing, NY, USA', destinationLAT: '40.7454589', destinationLONG: '-73.784132', destinationRadius: '5'})
  ])

  const passengers = await Promise.all([
    Passenger.create({name: 'Hoopla Lot', email: 'po@email.com', phoneNumber: '9199089871', originAddress: '10 Hanover Square, NY, New York, USA', originLAT: '40.704546', originLONG: '-74.008884', originRadius: '5', destinationAddress: 'San Francisco – Oakland Bay Bridge, San Francisco, CA, USA', destinationLAT: '37.8003575', destinationLONG: '-122.3755184', destinationRadius: '2'}),
    Passenger.create({name: 'Chung Lin', email: 'cody@email.com', phoneNumber: '5169899812', originAddress: '101 St Andrews Ln, Glen Cove, NY, USA', originLAT: '40.8711487', originLONG: '-73.6225297', originRadius: '10', destinationAddress: '1111 Figueroa St, Los Angeles, CA, USA', destinationLAT: '34.0430', destinationLONG: '-118.266795', destinationRadius: '5'}),
    Passenger.create({name: 'Thunk Yea', email: 'yea@email.com', phoneNumber: '9898388952', originAddress: 'Zoo Center, Bronx, NY, USA', originLAT: '40.8514961', originLONG: '-73.879441', originRadius: '5', destinationAddress: 'Madison Square Garden Towers, New York, NY, USA', destinationLAT: '40.752', destinationLONG: '-73.993', destinationRadius: '10'}),
    Passenger.create({name: 'Gretchen Esther', email: 'gretchy@email.com', phoneNumber: '2129897676', originAddress: 'Goldenrod Avenue, Franklin Square, NY, USA', originLAT: '40.7102636', originLONG: '-73.667065', originRadius: '10', destinationAddress: '55 Buffalo Avenue, Brooklyn, NY, USA', destinationLAT: '40.67690619999999', destinationLONG: '-73.9245236', destinationRadius: '5'}),
    Passenger.create({name: 'Wendy You', email: 'wendy@email.com', phoneNumber: '0900009800', originAddress: 'Albany Avenue, Brooklyn, NY, USA', originLAT: '40.6652457', originLONG: '-73.9397949', originRadius: '1', destinationAddress: 'Edison Place, Newark, NJ, USA', destinationLAT: '40.7336703', destinationLONG: '-74.1680875', destinationRadius: '25'}),
    Passenger.create({name: 'Kenneth Jin', email: 'ken@email.com', phoneNumber: '3159859999', originAddress: 'Goldenrod Avenue, Franklin Square, NY, USA', originLAT: '40.7102636', originLONG: '-73.667065', originRadius: '25', destinationAddress: '10 Rodeo Drive, Beverly Hills, Los Angeles, CA, USA', destinationLAT: '34.06706310000001', destinationLONG: '-118.4012429', destinationRadius: '10'}),
    Passenger.create({name: 'Charles Lin', email: 'charles@email.com', phoneNumber: '2121345678', originAddress: 'Central Park West, New York, NY, USA', originLAT: '40.7848582', originLONG: '-73.9696519', originRadius: '10', destinationAddress: '5358 194th Street, Flushing, NY, USA', destinationLAT: '40.7454589', destinationLONG: '-73.784132', destinationRadius: '1'}),
    Passenger.create({name: 'Brother Joe', email: 'joe@email.com', phoneNumber: '7189890983', originAddress: 'Goldenrod Avenue, Franklin Square, NY, USA', originLAT: '40.7102636', originLONG: '-73.667065', originRadius: '5', destinationAddress: 'Goldenrod Avenue, Franklin Square, NY, USA', destinationLAT: '40.7102636', destinationLONG: '-73.667065', destinationRadius: '5'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${drivers.length} users`)
  console.log(`seeded ${passengers.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
