const generateHelpers = (db) => {
  const fetchAllResidents = () => {
    return db
      .query('SELECT * FROM residents')
  }

  const fetchAllIslands = () => {
    return db
      .query('SELECT * FROM islands')
  }

  const fetchSpecificIsland = (name) => {
    return db
      .query('SELECT * FROM islands WHERE name LIKE $1', [name])
  }


  return { fetchAllIslands, fetchAllResidents, fetchSpecificIsland }
}

module.exports = generateHelpers