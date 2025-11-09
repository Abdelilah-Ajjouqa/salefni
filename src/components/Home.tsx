import { Link } from "react-router-dom";
import useAPI from "../components/useAPI";
import type { CreditTypesInterface } from "../types/types";

const Home = () => {
    const { data: creditTypes, loading, error } = useAPI<CreditTypesInterface[]>(
        "http://localhost:3000/creditTypes"
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Finance Your Dreams with <br />
                        <span className="text-gray-800">Salefni</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Quick, transparent credit simulations. Get instant estimates for
                        your auto, personal, or home loans in seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/simulator"
                            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black transition shadow-lg"
                        >
                            Start Simulation
                        </Link>
                        <a
                            href="#credit-types"
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition border-2 border-gray-900"
                        >
                            View Options
                        </a>
                    </div>
                </div>
            </section>

            {/* Credit Types Section */}
            <section className="container mx-auto px-4 py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Available Credit Types
                </h2>

                {loading ? (
                    <div className="text-center text-gray-600">
                        Loading credit options...
                    </div>
                ) : error ? (
                    <div className="text-center text-red-600">
                        Error loading credit types: {error}
                    </div>
                ) : !creditTypes ? (
                    <div className="text-center text-gray-600">
                        No credit types available
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {creditTypes.map((credit) => (
                            <div
                                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <img src="/public/dolar-svgrepo-com.svg" alt="dolar-logo" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {credit.label}
                                </h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Rate from:</span>
                                        <span className="font-semibold text-gray-900">
                                            {credit.defaultAnnualRate}%
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Amount:</span>
                                        <span className="font-semibold text-gray-900">
                                            {credit.minAmount.toLocaleString()} -{" "}
                                            {credit.maxAmount.toLocaleString()} MAD
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Up to:</span>
                                        <span className="font-semibold text-gray-900">
                                            {credit.maxMonths} months
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to="/simulator"
                                    state={{ creditType: credit.id }}
                                    className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                                >
                                    Simulate Now
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* How It Works Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gray-900">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Choose Credit Type
                            </h3>
                            <p className="text-gray-600">
                                Select the type of credit that fits your needs
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gray-900">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Run Simulation
                            </h3>
                            <p className="text-gray-600">
                                Enter amount and duration to get instant results
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gray-900">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Submit Application
                            </h3>
                            <p className="text-gray-600">
                                Happy with the terms? Apply directly from your simulation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Run your first simulation now - it's quick, free, and with no
                        commitment
                    </p>
                    <Link
                        to="/simulator"
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
                    >
                        Start Your Simulation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;