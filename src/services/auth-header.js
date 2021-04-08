const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user)

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken }
  } else {
    return {}
  }
}

export default authHeader

// return { Authorization: ‘Bearer ‘ + user.accessToken, ‘x-access-token’: user.accessToken };
