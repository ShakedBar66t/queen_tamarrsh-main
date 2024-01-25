
export enum SelectedPage {
  Home = 'home',
  Collections = 'collections',
  LearnMore = 'learnmore',
  Portfolio = 'portfolio',
  ContactUs = 'contactus',
  Policy = 'policy',
  Login = 'login',
}

export type Form = {
  user_name: string
  user_email: string
  phone_number: string
  message: string
}

export type Collection = {
  img: string
  title: string
  description: string
  price: number | string
}

