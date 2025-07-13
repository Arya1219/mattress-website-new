import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mattress & Pillow | IIT BHU</title>
        <meta name="description" content="Affordable mattress and pillow for freshers - IIT BHU" />
      </Head>

      <div style={{ backgroundColor: '#111', color: '#FFD700', minHeight: '100vh', padding: '2rem' }}>

        {/* Go to Products Button at Top */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              padding: '1.5rem 3rem',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '2rem',
              borderRadius: '15px',
              textDecoration: 'none',
              boxShadow: '0 0 20px #FFD700',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            Go to Products →
          </Link>
        </div>

        {/* Problem Image */}
        <section style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img
            src="/2_The-Problem-A-Rough-Welcome-for-Freshers.png"
            alt="Problem Section"
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
            }}
          />
        </section>

        {/* Solution Image */}
        <section style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img
            src="/3_Our-Solution-Comfort-and-Convenience.png"
            alt="Solution Section"
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
            }}
          />
        </section>

        {/* Why This Matters Image */}
        <section style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img
            src="/4_Why-This-Matters-Beyond-Just-Bedding.png"
            alt="Why This Matters"
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
            }}
          />
        </section>

        {/* Contact Us Image */}
        <section style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <img
            src="/8_Contact-Us.png"
            alt="Contact Us"
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
            }}
          />
        </section>

        {/* Go to Products Button at Bottom */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              padding: '1.5rem 3rem',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '2rem',
              borderRadius: '15px',
              textDecoration: 'none',
              boxShadow: '0 0 20px #FFD700',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            Go to Products →
          </Link>
        </div>
      </div>
    </>
  );
}
