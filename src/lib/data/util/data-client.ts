export type Endpoint = 
    'dashboard' |
    'family' |
    'family-user' |
    'module' |
    'module-type' |
    'slide' |
    'slide-type' |
    'user'

export class DataClient< ReturnType > {

    constructor( slug: Endpoint ) {
        this.slug = slug
    }

    private slug: Endpoint

    async createOne( properties: Omit<ReturnType, 'id'> ): Promise<ReturnType> {

        const res = await fetch(`/api/${this.slug}`, {
            method: "POST",
            body: JSON.stringify(properties),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if ( res.ok ) {
            return res.json()
        } else {
            throw new Error(`Failed to create new ${this.slug}.`)
        }
    }

    async getOne( id: string | number ): Promise<ReturnType> {

        const res = await fetch(`/api/${this.slug}/${id}`)

        if (res.ok) {
            return res.json()
        } else {
            throw new Error(`Failed to retrieve ${this.slug} with id: ${id}.`)
        }
    }

    async getAll(): Promise<ReturnType[]> {

        const res = await fetch(`/api/${this.slug}`)

        if (res.ok) {
            return res.json()
        } else {
            throw new Error(`Failed to retrieve ${this.slug}s.`)
        }

    }

    async updateOne( id: string | number, properties: Partial<Omit<ReturnType, 'id'>>): Promise<ReturnType> {
        
        const res = await fetch(`/api/${this.slug}/${id}`, {
            method: "POST",
            body: JSON.stringify(properties),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if ( res.ok ) {
            return res.json()
        } else {
            throw new Error(`Failed to create new ${this.slug}.`)
        }

    }

    async deleteOne( id: string | number ): Promise<ReturnType> {

        const res = await fetch(`/api/${this.slug}/${id}`, {
            method: "DELETE"
        })

        if ( res.ok ) {
            return res.json()
        } else {
            throw new Error(`Failed to delete ${this.slug} with id: ${id}.`)
        }

    }

}