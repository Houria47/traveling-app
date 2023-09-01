import React from 'react'

function ContactMessagesPage() {
  const Messages = [
    {
      from: 'Test user',
      email: 'test.user@gmail.com',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod qui dolore neque sunt similique voluptatum praesentium accusamus possimus in maiores, exercitationem omnis. Quo quaerat tempora totam nemo cumque eum adipisci.',
    },
    {
      from: 'Test user',
      email: 'test.user@gmail.com',
      text: 'Iossimus in maiores, exercitationem omnis. Quo quaerat tempora totam nemo cumque eum adipisci.',
    },
    {
      from: 'Test user',
      email: 'test.user@gmail.com',
      text: 'Sunt similique voluptatum praesentium accusamus possimus in maiores, exercitationem omnis. Quo quaerat tempora totam nemo cumque eum adipisci.',
    },
    {
      from: 'Test user',
      email: 'test.user@gmail.com',
      text: 'Praesentium accusamus possimus in maiores, exercitationem omnis. Quo quaerat tempora totam nemo cumque eum adipisci.',
    },
  ]
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '4rem 2rem 2rem' }}>
        Users Messages
      </h1>
      <div
        style={{
          padding: '2rem 9%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        {Messages.map((message) => (
          <div
            style={{
              background: '#eee',
              borderRadius: '7px',
              padding: '2rem',
              fontSize: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <div style={{ fontWeight: 600, color: 'var(--main-color)' }}>
              {message.from}
            </div>
            <div
              style={{
                fontWeight: 600,
                color: 'var(--main-color)',
                textTransform: 'none',
              }}
            >
              {message.email}
            </div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactMessagesPage
