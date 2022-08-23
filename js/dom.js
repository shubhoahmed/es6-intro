document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    }

})
document.getElementById('do-center').addEventListener('click', function () {
    const firstFriend = document.getElementById('friend-one');
    firstFriend.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const friend = document.createElement('div')
    friend.classList.add('friend');
    friend.innerHTML = `  
                 <h3 class="friend-name">New Friend</h3>
                 <p>Lorem ipsum dolor sit amet.</p>
             `
    friendContainer.appendChild(friend);
})