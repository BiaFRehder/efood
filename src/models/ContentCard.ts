class ContentCard {
  id: number
  variant: string
  image: string
  altImage: string
  name: string
  rating: string
  category: string[]
  description: string

  constructor(
    id: number,
    variant: string,
    image: string,
    altImage: string,
    name: string,
    rating: string,
    category: string[],
    description: string
  ) {
    this.id = id
    this.variant = variant
    this.image = image
    this.altImage = altImage
    this.name = name
    this.rating = rating
    this.category = category
    this.description = description
  }
}

export default ContentCard
