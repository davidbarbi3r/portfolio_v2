import {useRouter} from "next/router";
import {useState} from "react";

export default function Services () {
	const { locale } = useRouter();
	const services = {
		fr: [{
			title: "Création de Site Web",
			description: "Offrez-vous une présence en ligne inégalée. Je conçois des sites web qui allient esthétique et efficacité, garantissant un engagement optimal de vos visiteurs. Chaque site est optimisé pour le référencement et conçu pour s'adapter à tous les écrans.",
			icon: "fas fa-laptop-code",
			price: "Dès 1000€",
			image: "/assets/arrow1.svg"
		},
		// 	{
		// 	title: "Applications Mobiles",
		// 	description: "Faites le choix de l'excellence pour votre application mobile. Conçues pour captiver, mes réalisations se distinguent par leur fluidité et leur user-friendly. Une expérience utilisateur remarquable sur chaque appareil.",
		// 	icon: "fas fa-mobile-alt",
		// 	price: "Dès 2000€",
		// 	image: "/assets/arrow2.svg"
		// },
			{
			title: "Développement Sur Mesure",
			description: "Votre vision mérite une réalisation impeccable. Je pratique le Clean Code, les tests rigoureux et le Git Flow, tout en m'intégrant sans heurt à toute équipe de développement. Faites confiance à l'expertise pour assurer la réussite de votre projet.",
			icon: "fas fa-code",
			price: "350€ / jour",
			image: "/assets/arrow3.svg"
		}, {
			title: "Maintenance & Optimisation",
			description: "Protégez et valorisez vos actifs digitaux. Je vous offre la sérénité d'une maintenance proactive, des mises à jour pointues et une optimisation continue pour garder votre plateforme au sommet de ses performances.",
			icon: "fas fa-tools",
			price: "Dès 50€ / mois",
			image: "/assets/arrow4.svg"
		}],
		en: [{
			title: "Website Creation",
			description: "Elevate your online presence. I craft websites that blend aesthetics with efficiency, ensuring optimal visitor engagement. Every site is SEO-optimized and designed to adapt seamlessly across all screens.",
			icon: "fas fa-laptop-code",
			price: "Starting at €1000",
			image: "/assets/arrow1.svg"
		},
		// 	{
		// 	title: "Mobile Application Development",
		// 	description: "Choose excellence for your mobile app. My creations stand out for their fluidity and user-friendliness, offering an outstanding user experience on every device.",
		// 	icon: "fas fa-mobile-alt",
		// 	price: "Starting at €2000",
		// 	image: "/assets/arrow2.svg"
		// },
			{
			title: "Custom Development",
			description: "Your vision deserves impeccable execution. I uphold Clean Code standards, rigorous testing, and Git Flow, while seamlessly integrating with any development team. Trust in expertise to ensure your project's success.",
			icon: "fas fa-code",
			price: "€350 / day",
			image: "/assets/arrow3.svg"
		}, {
			title: "Maintenance & Optimization",
			description: "Protect and enhance your digital assets. Enjoy the peace of mind that comes with proactive maintenance, precise updates, and continuous optimization, ensuring your platform stays at peak performance.",
			icon: "fas fa-tools",
			price: "Starting at €50 / month",
			image: "/assets/arrow4.svg"
		}]
	}
	const [selectedService, setSelectedService] = useState(services[locale][0]);

	return (
		<section className={"bg-gray-50 flex-col md:flex-row py-8"}>
				<div className={"flex flex-col items-center justify-center w-full md:w-2/5"}>
					<h2 className={"text-3xl font-bold text-center mb-5"}><span className={"text-main-text"}>Mes</span> Services</h2>
					<div className={"flex flex-col items-center justify-center w-4/5"}>
						{services[locale].map((service, index) => (
							<div
								className={"flex flex-col items-center justify-center w-full border-2 border-gray-200 rounded-lg p-5 mb-5 cursor-pointer hover:border-main-text transition-colors duration-300 ease-out"}
								key={index}
								onClick={() => setSelectedService(service)}
							>
								<div className={"flex flex-col items-center justify-center w-full"}>
									<i className={service.icon + " text-5xl mb-3"}></i>
									<h3 className={"text-xl font-bold text-center mb-3"}>{service.title}</h3>
									{selectedService.title === service.title && (
										<p className={"text-center"}>{service.description}</p>
									)}
								</div>
								{selectedService.title === service.title &&
									<div className={"flex flex-col items-center justify-center w-full"}>
									<p className={"text-center font-bold"}>{service.price}</p>
								</div>}
							</div>
						))}
					</div>
				</div>
				<div className={"flex flex-col items-center justify-center w-full"}>
					<img
						src={selectedService.image}
						alt={"Arrow"}
					/>
				</div>
		</section>
	)
}