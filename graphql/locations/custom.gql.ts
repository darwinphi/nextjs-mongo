// To instruct the server to cache the retrieved values, set an @cacheControl directive for the whole custom type and a shorter one for the on_wishlist property because we expect this particular property to change frequently.

const custom = `
directive @cacheControl(maxAge: Int) on FIELD_DEFINITION | OBJECT
type Location @cacheControl(maxAge: 86400) {
    address: String
    street: String
    zipcode: String
    borough: String
    cuisine: String
    grade: String
    name: String
    on_wishlist: [String] @cacheControl(maxAge: 60)
    location_id: String
} `;

export default custom;
