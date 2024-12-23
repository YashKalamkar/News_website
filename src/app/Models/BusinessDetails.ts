export interface BusinessDetails {
    status: string
    items: Item[]
  }
  
  export interface Item {
    title: string
    snippet: string
    publisher: string
    timestamp: string
    newsUrl: string
    images?: Images
    hasSubnews: boolean
    subnews?: News[]
  }
  
  export interface Images {
    thumbnail: string
    thumbnailProxied: string
  }
  
  export interface News {
    title: string
    snippet: string
    publisher: string
    timestamp: string
    newsUrl: string
    images?: Images2
  }
  
  export interface Images2 {
    thumbnail: string
    thumbnailProxied: string
  }
  