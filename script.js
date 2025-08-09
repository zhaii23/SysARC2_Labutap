document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    const users = [
        { username: "zairah", password: "letmein" },
        { username: "admin", password: "1234" }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = 'welcome.html'; 
    } else {
        const messageElement = document.getElementById('message');
        messageElement.innerText = 'Invalid username or password';
        messageElement.style.color = 'red'; 
    }
});
