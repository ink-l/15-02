const users = [
    {
        username: "Bob",
        power: "500"
    },
    {
        username: "John",
        power: "1000"
    },
    {
        username: "Dave",
        power: "1500"
    },
    {
        username: "Alex",
        power: "2000"
    },
    {
        username: "David",
        power: "2500"
    }
]
const filteredUsers = users.filter(user => user.power > 1500)
console.log(filteredUsers)


