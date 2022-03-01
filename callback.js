const posts=[
    { title: 'Post One', body: 'This is post one',createdAt:new Date().getTime()},
    { title: 'Post Two', body: 'This is post two',createdAt:new Date().getTime()}
];
let intervalid= 0;

function getPosts(){
    clearInterval(intervalid);
    intervalid=setInterval(() =>{
        let output='';

        posts.forEach((post,index) =>{
            output+=`<li>${post.title} -Last updated at ${(new Date().getTime()- posts[index].createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
function createPost(post, callback){

        posts.push({...post,createdAt: new Date().getTime()});

        callback()

}
function create4thPost(post,callback){

        posts.push({...post,createdAt: new Date().getTime()});
        callback();

}
getPosts();
createPost({title:'Post Three',
body:'This is post three'},getPosts);
create4thPost({title:'Post Four',
body:'This is post four'},getPosts);
function deletePost(){
    return new Promise((resolve,reject) => {
        if (posts.length>0){
            setTimeout(()=>{
                resolve();
            },1000);
        }
        else{
            reject('Error: Array is Empty now')
        }
    });
    }
    const timerId=setInterval(()=>{
        deletePost()
        .then(()=>{
            posts.pop();
            let lastPost=document.querySelector('body').lastChild;
            lastPost.parentNode.removeChild(lastPost);
        })
        .catch(err =>{
            console.log(err);
            clearInterval(timerId);
    
        });
    },2000)
    const lastActivity=updatelastActivityTime (()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                posts.lastActivityTime=new Date().getTime();
                resolve(posts.lastActivityTime)
            },1000);
    
        })
    }); 