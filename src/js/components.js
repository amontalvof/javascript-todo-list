import '../css/components.css';

export const greet = (name) => {
    console.log('Creating h1 tag');
    const h1 = document.createElement('h1');
    h1.innerText = `Hello ${name}`;
    document.body.append(h1);
};
