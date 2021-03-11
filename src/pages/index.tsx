import { Container } from '../styles/pages/Home'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <Container>

      <SEO
        title="Home"
        image="logo.png"
      />

      <h1>Maffei by Pedro henrique</h1>
      <p>Stay tuned for new updated content in the programming area</p>

    </Container>
  )
}
