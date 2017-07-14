require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

//add multiple docs to database

db
  .bulkDocs([
    {
      _id: 'patient_freeman_brenda_3066_6453927',
      type: 'patient',
      patientNumber: 6453927,
      firstName: 'Brenda',
      lastName: 'Freeman',
      birthdate: '1997-09-02',
      gender: 'F',
      ethnicity: 'W',
      last4SSN: 3066,
      conditions: ['Depression', 'Asthma']
    },
    {
      _id: 'patient_martin_diana_8039_7231651',
      type: 'patient',
      patientNumber: 7231651,
      firstName: 'Diana',
      lastName: 'Martin',
      birthdate: '1966-05-30',
      gender: 'F',
      ethnicity: 'W',
      last4SSN: 8039,
      conditions: ['Hypertension']
    },

    {
      _id: 'patient_austin_steve_3033_1001',
      patientNumber: 1001,
      firstName: 'Steve',
      lastName: 'Austin',
      birthdate: '1940-09-01',
      gender: 'M',
      ethnicity: 'W',
      last4SSN: 3033,
      conditions: ['Depression', 'Hypertension'],
      type: 'patient'
    },

    {
      _id: 'medication_nicorette_100mg_patch',
      label: 'Nicorette 100mg patch',
      ingredients: ['nicotene', 'tamezipam'],
      amount: '100',
      unit: 'mg',
      form: 'patch',
      type: 'medication'
    },

    {
      _id: 'medication_spironolactone_100mg_patch',
      label: 'Spironolactone 100mg patch',
      ingredients: ['spironolactone'],
      amount: '100',
      unit: 'mg',
      form: 'patch',
      type: 'medication'
    },

    {
      _id: 'medication_amlodipine_20mg_syrup',
      label: 'Amlodipine 20mg syrup',
      ingredients: ['Amlodipine', 'Aspirin'],
      amount: '20',
      unit: 'mg',
      form: 'syrup',
      type: 'medication'
    },
    {
      _id: 'pharmacy_Walgreens_Hwy_17_S._Myrtle_Beach_1004',
      type: 'pharmacy',
      storeNumber: '1004',
      storeChainName: 'Walgreens',
      storeName: 'Hwy 17 S. Myrtle Beach',
      streetAddress: '250 South Myrtle Beach Market Road',
      phone: '843-777-1111',
      city: 'Myrtle Beach',
      state: 'SC',
      zip: '29345'
    },

    {
      _id: 'pharmacy_Walmart_Hwy_17_1004',
      type: 'pharmacy',
      storeNumber: '1004',
      storeChainName: 'Walmart',
      storeName: 'Hwy 17',
      streetAddress: '100 Oakland Market Road',
      phone: '843-888-1111',
      city: 'Mount Pleasant',
      state: 'SC',
      zip: '29466'
    },

    {
      _id: 'pharmacy_CVS_Belle_Hall_1001',
      type: 'pharmacy',
      storeNumber: '1001',
      storeChainName: 'CVS',
      storeName: 'Belle Hall',
      streetAddress: '2000 Belle Hall Lane',
      phone: '843-881-5644',
      city: 'Mount Pleasant',
      state: 'SC',
      zip: '29464'
    }
  ])
  .then(function(result) {
    console.log('Attemting to load docs.')
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(function(err) {
    console.log(err)
  })
