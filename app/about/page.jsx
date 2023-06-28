export const metadata = {
    title: "TK - About"
}

const test = async () => await new Promise(resolve => setTimeout(resolve, 1000));

const AboutPage = async () => {
    console.log(" --- ", Date.now() / 1000);
    const r = await test();
    console.log(" --- ", Date.now() / 1000);

    return (
        <div>About page</div>
    )
}

export default AboutPage