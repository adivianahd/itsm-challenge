interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

interface Post {
    userId: User['id']
    id: number
    title: string
    body: string
}


interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

interface Geo {
    lat: string
    lng: string
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}
