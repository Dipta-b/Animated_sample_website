import bgImg from '../../assets/bg-image/bg-image.jpg';

const Layout = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Site</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Your success starts with a beautiful design.
                </p>
            </div>
        </div>
    );
};

export default Layout;
