import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Languages, Trophy, History, Star, Home } from 'lucide-react';
import './App.css';
import heroImg from './assets/hero.png';
import childhoodImg from './assets/childhood.png';
import barcaImg from './assets/barca.png';
import worldCupImg from './assets/worldcup.png';

const slides = [
    {
        id: 1,
        title: "Messi'nin Hayatı",
        turkish: "Merhaba! Bugün Lionel Messi'nin hayatını öğreniyoruz. O, dünyanın en ünlü futbolcularından biridir.",
        russian: "Привет! Сегодня мы изучаем жизнь Лионеля Месси. Он один из самых известных футболистов в мире.",
        image: heroImg,
        icon: <Star className="w-6 h-6 text-yellow-400" />,
        color: "from-blue-600 to-blue-400"
    },
    {
        id: 2,
        title: "Doğum ve Çocukluk",
        turkish: "Lionel Messi, 24 Haziran 1987 tarihinde Arjantin'de doğdu. Ailesiyle birlikte Rosario şehrinde yaşadı.",
        russian: "Лионель Месси родился 24 июня 1987 года в Аргентине. Он жил в городе Росарио вместе со своей семьей.",
        image: childhoodImg,
        icon: <Home className="w-6 h-6 text-orange-400" />,
        color: "from-orange-600 to-orange-400"
    },
    {
        id: 3,
        title: "Futbol Tutkusu",
        turkish: "O, çocukken her gün futbol oynuyordu. Çok küçüktü ama çok yetenekli bir çocuktu.",
        russian: "В детстве он каждый день играл в футбол. Он был очень маленьким, но очень талантливым ребенком.",
        image: childhoodImg,
        icon: <History className="w-6 h-6 text-green-400" />,
        color: "from-green-600 to-green-400"
    },
    {
        id: 4,
        title: "Barcelona Efsanesi",
        turkish: "Messi, 13 yaşında İspanya'ya gitti. Uzun yıllar Barcelona takımında oynadı ve 672 gol attı.",
        russian: "Месси уехал в Испанию в возрасте 13 лет. Он много лет играл в команде «Барселона» и забил 672 гола.",
        image: barcaImg,
        icon: <Trophy className="w-6 h-6 text-red-500" />,
        color: "from-red-600 to-red-400"
    },
    {
        id: 5,
        title: "Altın Top Ödülleri",
        turkish: "Lionel Messi, tam 8 kez 'Altın Top' (Ballon d'Or) ödülünü kazandı. Bu bir dünya rekorudur.",
        russian: "Лионель Месси целых 8 раз выигрывал награду «Золотой мяч» (Ballon d'Or). Это мировой рекорд.",
        image: heroImg,
        icon: <Star className="w-6 h-6 text-yellow-500" />,
        color: "from-yellow-600 to-yellow-400"
    },
    {
        id: 6,
        title: "Messi'nin Ailesi",
        turkish: "Onun eşi Antonela ve üç oğlu var: Thiago, Mateo ve Ciro. Ailesi onun için çok önemlidir.",
        russian: "У него есть жена Антонела и три сына: Тьяго, Матео и Чиро. Семья очень важна для него.",
        image: heroImg,
        icon: <History className="w-6 h-6 text-pink-400" />,
        color: "from-pink-600 to-pink-400"
    },
    {
        id: 7,
        title: "Dünya Şampiyonu",
        turkish: "2022 yılında Arjantin ile Dünya Kupası'nı kazandı. Bu onun en büyük hayaliydi.",
        russian: "В 2022 году он выиграл Чемпионат мира с Аргентиной. Это была его самая большая мечта.",
        image: worldCupImg,
        icon: <Trophy className="w-6 h-6 text-yellow-600" />,
        color: "from-yellow-700 to-yellow-500"
    },
    {
        id: 8,
        title: "Yeni Bir Sayfa: Inter Miami",
        turkish: "O şimdi Amerika'da, Inter Miami takımında oynuyor. O, her zaman bir yıldız kalacak!",
        russian: "Сейчас он играет в Америке, в команде «Интер Майами». Он навсегда останется звездой!",
        image: barcaImg,
        icon: <Star className="w-6 h-6 text-pink-500" />,
        color: "from-pink-500 to-pink-300"
    }
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showRussian, setShowRussian] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setShowRussian(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setShowRussian(false);
    };

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="slide-wrapper"
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="background-bg"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    >
                        <div className="overlay"></div>
                    </div>

                    {/* Content Card */}
                    <div className="content-container">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="content-card glass"
                        >
                            <div className="card-header">
                                <span className={`icon-wrapper bg-gradient-to-br ${slides[currentSlide].color}`}>
                                    {slides[currentSlide].icon}
                                </span>
                                <h2>{slides[currentSlide].title}</h2>
                            </div>

                            <div className="text-section">
                                <p className="turkish-text">{slides[currentSlide].turkish}</p>

                                <AnimatePresence>
                                    {showRussian && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 0.8 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="russian-text"
                                        >
                                            {slides[currentSlide].russian}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={() => setShowRussian(!showRussian)}
                                className="translate-btn"
                            >
                                <Languages className="w-4 h-4 mr-2" />
                                {showRussian ? "Çeviriyi Gizle" : "Tercüme Et (RU)"}
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="nav-controls">
                <button onClick={prevSlide} className="nav-btn glass">
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="progress-dots">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentSlide(index);
                                setShowRussian(false);
                            }}
                        ></div>
                    ))}
                </div>

                <button onClick={nextSlide} className="nav-btn glass">
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}

export default App;
