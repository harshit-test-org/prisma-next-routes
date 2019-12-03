import React from 'react';

const Index = () => {
  React.useEffect(() => {
    fetch('/api').then(res => res.json()).then(res => {
      console.log(res)
    });
  }, [])
  return (
    <div>
    This is next js index
    </div>
  )
}

export default Index
