
import heroes from '../data/heroes';

// find?, filter
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );


