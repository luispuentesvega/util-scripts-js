//Must be executed on a browser...
const Http = XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';

Http.open("GET", url);
Http.send();

Http.onreadystatechange = e => {
    console.log('responseText' ,Http.responseText);
}
