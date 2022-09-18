let userResponse = fetch('https://reqres.in/api/users').then( (response) => {
	return response.json()
})

export default await userResponse
