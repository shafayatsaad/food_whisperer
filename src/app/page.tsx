// This is the homepage (route: /). 
// Currently, we don't have a landing page, so we just immediately redirect visitors 
// to the request dashboard ('/dashboard') where the main action happens.
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/dashboard')
}
