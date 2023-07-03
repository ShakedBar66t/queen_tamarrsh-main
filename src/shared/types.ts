
export enum SelectedPage {
  Home = 'home',
  Collections = 'collections',
  LearnMore = 'learnmore',
  Portfolio = 'portfolio',
  ContactUs = 'contactus',
  Login = 'login',
}

export type Form = {
  name: string
  email: string
  mobile: string
  message: string
}

export type Collection = {
  img: string
  title: string
  description: string
  price: number
}

