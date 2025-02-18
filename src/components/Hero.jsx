const Hero = () => {
    return (
        <section 
        className="flex items-center justify-center h-[75vh] bg-[url('./assets/background-image.webp')] bg-cover bg-center bg-no-repeat text-white text-center">
            <div 
            className= "bg-[#0000009a] p-12">
                <h1 className="p-1 text-3xl uppercase font-bold border-b-1 border-gray-400">Jennifer Godfrey</h1>
                <p className="p-1 text-xl uppercase">Software Engineer</p>
                <p className="mt-8">Building with React, Javascript, Node.js, Express, MongoDb</p>
                <button className="mt-4 py-2 px-12 uppercase font-semibold border-1">Contact Me</button>
            </div>
        </section>
    );
};

export default Hero;