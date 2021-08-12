
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import "../styles/categoriesHomepage2.css";

const CategoriesHomepage2 = () => {
const history = useHistory();

const handleRoute = (category) =>{
	let path="/products/"+category
	return (
		<Redirect to={path}/>
	)
}

return (
<section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">Kategoriler</div>

		<article className="postcard light blue" onClick={handleRoute("womenwear")}>
			<a className="postcard__img_link" href="/products/womenwear">
				<img className="postcard__img" src="https://ae01.alicdn.com/kf/H26924523239a4c9fabed915d2a859b6az/Ukrayna-kad-n-nak-kazak-ulusal-kost-m-en-iyi-arkada-bahar-2020-bayan-giyim-kazak.jpg_Q90.jpg_.webp" alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="/products/womenwear">Kadın Giyim</a></h1>
				<div className="postcard__subtitle small">
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Elbise</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>Tişört</li>
					<li className="tag__item play blue">
						<a href="#"><i className="fas fa-play mr-2"></i>Etek</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light red" onClick={handleRoute("menwear")}>
			<a className="postcard__img_link" href="/products/menwear">
				<img className="postcard__img" src="https://i.pinimg.com/originals/3c/ff/39/3cff3936340445207589d898a3b578e3.jpg" alt="Image Title" />	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a href="/products/menwear">' Erkek Giyim</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play red">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light green" onClick={handleRoute("electronics")}>
			<a className="postcard__img_link" href="/products/electronics">
				<img className="postcard__img" src="https://cdn.dsmcdn.com//ty74/product/media/images/20210326/23/75554837/110771895/2/2_org_zoom.jpg" alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title green"><a href="/products/electronics">Elektronik</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play green">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light yellow"  onClick={handleRoute("jewelery")}>
			<a className="postcard__img_link" href="/products/jewelery">
				<img className="postcard__img" src="https://cdn03.ciceksepeti.com/cicek/kcx92143253/XL/yeni-model-abiye-takilar-siyah-kristal-tasli-kolye-ve-kupe-taki-seti-fiyatlari-1.jpg" alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title yellow"><a href="/products/jewelery">Takılar</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play yellow">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>

  );
}

export default CategoriesHomepage2;