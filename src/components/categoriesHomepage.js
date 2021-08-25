
import React from 'react';
import { Redirect } from 'react-router';
import "../styles/categoriesHomepage.css";

const CategoriesHomepage = () => {

	//This component consists of categories and explanations related to that category in homepage.

	//Handle route takes an argument(category) and redirects to that category.
	const handleRoute = (category) => {
		let path = "/products/" + category
		return (
			<Redirect to={path} />
		)
	}

	return (
		<section className="light">
			<div className="container py-2">
				<div className="h1 text-center text-dark text-capitalize" id="pageHeaderTitle">Kategoriler</div>

				<article className="postcard light blue" onClick={handleRoute("womenwear")}>
					<a className="postcard__img_link" href="/products/womenwear">
						<img className="postcard__img" src="https://ae01.alicdn.com/kf/H26924523239a4c9fabed915d2a859b6az/Ukrayna-kad-n-nak-kazak-ulusal-kost-m-en-iyi-arkada-bahar-2020-bayan-giyim-kazak.jpg_Q90.jpg_.webp" alt="Image Title" />
					</a>
					<div className="postcard__text t-dark">
						<h1 className="postcard__title blue"><a className="categoriesHomepage_title" href="/products/womenwear">Kadın Giyim</a></h1>
						<div className="postcard__subtitle small">
						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt" style={{ fontSize: "19px" }}>Yeni sezon için tasarlanmış olan özellikle günlük modeller sayesinde gün içerisinde daha rahat bir şekilde hareket edebilir ve şıklığınızdan ödün vermeden kombinlerinizi yapabilirsiniz. Özellikle aradığınız tarzda hazırlanmış olan modeller üzerinden yapacağınız tercihler sayesinde MeShop! üzerinden vereceğiniz online sipariş sonrasında kısa sürede ürün adresinize kargo ile teslim edilmektedir.</div>
						<ul className="postcard__tagbox">
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Elbise</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Tişört</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Kot</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Etek</li>

						</ul>
					</div>
				</article>
				<article className="postcard light red" onClick={handleRoute("menwear")}>
					<a className="postcard__img_link" href="/products/menwear">
						<img className="postcard__img" src="https://i.pinimg.com/originals/3c/ff/39/3cff3936340445207589d898a3b578e3.jpg" alt="Image Title" />
					</a>
					<div className="postcard__text t-dark">
						<h1 className="postcard__title red"><a className="categoriesHomepage_title" href="/products/menwear">'  Erkek Giyim</a></h1>
						<div className="postcard__subtitle small">

						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt" style={{ fontSize: "19px" }}>Erkek giyim için geniş ürün ve marka yelpazesiyle hizmet veren MeShop!'ta kendi tarzınıza özel her şeyi bulabilirsiniz. Hem günlük ve rahat kıyafetler, hem de şık takım elbiseler geniş fiyat yelpazesiyle mağazamızda bulunmaktadır. Özellikle aradığınız tarzda hazırlanmış olan modeller üzerinden yapacağınız tercihler sayesinde MeShop! üzerinden vereceğiniz online sipariş sonrasında kısa sürede ürün adresinize kargo ile teslim edilmektedir.</div>
						<ul className="postcard__tagbox">
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Takım Elbise</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Tişört</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Kot</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Gömlek</li>
						</ul>
					</div>
				</article>
				<article className="postcard light green" onClick={handleRoute("electronics")}>
					<a className="postcard__img_link" href="/products/electronics">
						<img className="postcard__img" src="https://cdn.dsmcdn.com//ty74/product/media/images/20210326/23/75554837/110771895/2/2_org_zoom.jpg" alt="Image Title" />
					</a>
					<div className="postcard__text t-dark">
						<h1 className="postcard__title green"><a className="categoriesHomepage_title" href="/products/electronics">Elektronik</a></h1>
						<div className="postcard__subtitle small">

						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt" style={{ fontSize: "19px" }}>Hem ev kurmak için hem de hobileriniz için gereken her türlü elektronik eşyayı MeShop!'tan temin edebilirsiniz. Siparişinizi verip güvenli bir ödemenin ardından elektronik eşyaların hassasiyetine uygun bir taşıma için kargoya verilen ürününüze kavuşabilirsiniz. Elektronik eşyanızı MeShop!'un sağladığı garantiyle birlikte keyifle kullanabilirsiniz.</div>
						<ul className="postcard__tagbox">
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Bilgisayar</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Beyaz Eşya</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Telefon</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Kulaklık</li>
						</ul>
					</div>
				</article>
				<article className="postcard light yellow" onClick={handleRoute("jewelery")}>
					<a className="postcard__img_link" href="/products/jewelery">
						<img className="postcard__img" src="https://cdn03.ciceksepeti.com/cicek/kcx92143253/XL/yeni-model-abiye-takilar-siyah-kristal-tasli-kolye-ve-kupe-taki-seti-fiyatlari-1.jpg" alt="Image Title" />
					</a>
					<div className="postcard__text t-dark">
						<h1 className="postcard__title yellow"><a className="categoriesHomepage_title" href="/products/jewelery">Hediyelik Eşya</a></h1>
						<div className="postcard__subtitle small">

						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt" style={{ fontSize: "19px" }}>Sevdiklerinizi sevindirmek için ihtiyacınız olan her şey sadece birkaç tık ötede! MeShop!'un sağladığı güvenle özel günlerde veya sevdiklerinizin özel kıldığı her gününüzde rahatlıkla sipariş verebilir ve MeShop! güvencesi altında hediyelerinin onların eline paketli ve özel notlarla ulaşmasını bekleyebilirsiniz.</div>
						<ul className="postcard__tagbox">
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Kolye</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Yüzük</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Bileklik</li>
							<li className="tag__item"><i className="fas fa-tag mr-2"></i>Hediyelik</li>
						</ul>
					</div>
				</article>
			</div>
		</section>

	);
}

export default CategoriesHomepage;