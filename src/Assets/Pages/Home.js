import React, { useState, useEffect, useRef } from "react";

function Home() {

    const [images, setImages] = useState([])
    const section1 = useRef(null)
    const section2 = useRef(null)

    const fetchData = async () => {
        try {
            const url = "https://api.unsplash.com/photos?page=1&per_page=10"
            const response = await fetch(url, {
                headers: {
                    'Authorization': 'Client-ID eDyJr4X3MDuPISfgHCAUDyZ49BlIrosNA_shUgy9i9k'
                }
            })
            const res = await response.json()
            setImages(res)
        } catch (err) {
            return
        }
    }
    useEffect(() => {
        fetchData()

        const observer = new IntersectionObserver(entries => {
            console.log(entries)
            entries[0].target.classList.toggle('active', entries[0].isIntersecting)
        }, { threshold: 1 })
        observer.observe(section1.current)
        observer.observe(section2.current)
    }, [])

    return(
        <>
            <div id="quote" select="false">
                <span className="quote-start">“</span>
                <p className="quote-text">Innovation begins with the idea of change.</p>
                <span className="quote-end">”</span>
            </div>
            <section className='section-1' ref={section1}>
                <div className="carousel">
                    <div className="carousel-wrapper" select="false">
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heading-container">
                    <h2 className="heading" select="false">Clicks</h2>
                </div>
            </section>
            <section className='section-2' ref={section2}>
                <div className="carousel">
                    <div className="carousel-wrapper" select="false">
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                        {images.map((image) => (
                            <div key={image.id} className="carousel-box">
                                <img src={image.urls.small_s3} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heading-container">
                    <h2 className="heading" select="false">Projects</h2>
                </div>
            </section>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor libero amet nemo mollitia rem eum praesentium iure soluta, eveniet quia maxime! Architecto quas quibusdam commodi provident laudantium voluptas similique quos cum adipisci inventore temporibus culpa expedita dolorem quidem numquam illo dolor iure, fugiat explicabo unde accusamus aut, facilis rerum! Officiis expedita aliquid nihil deserunt enim suscipit illo porro commodi libero dicta, eius beatae consequuntur, obcaecati aliquam quae nostrum natus quas provident dolore itaque tenetur maiores soluta molestias! Labore sequi explicabo mollitia odio adipisci exercitationem quam impedit dicta fugiat aliquam saepe recusandae beatae voluptas magnam repudiandae doloribus assumenda vel autem, maiores eaque, voluptates fugit voluptatem sint. Cupiditate repellendus dolorem voluptate doloribus aut reprehenderit voluptates dicta nam omnis. Voluptas esse voluptatum dolorem suscipit vitae delectus temporibus molestias iure minima, quis asperiores necessitatibus, dolores dolor? Nihil doloremque totam ullam repellendus consectetur facere explicabo incidunt deserunt voluptatibus est, dicta, consequatur alias sint accusamus officiis quis nemo repudiandae debitis libero ipsa eveniet minima aperiam officia laborum! Eos ad expedita impedit earum pariatur doloribus tempore fugiat distinctio aspernatur incidunt. Nobis illum tempora, deleniti eos quasi quam soluta impedit vero fugiat, iusto temporibus dolorum eligendi aut unde magnam autem modi suscipit perspiciatis delectus quis, corrupti repellendus exercitationem? Cumque nulla mollitia sapiente ducimus quas, cupiditate provident magnam fuga quibusdam eius hic, esse reiciendis consequuntur modi accusamus error labore asperiores laudantium molestiae voluptate ratione. Ut hic a eveniet commodi mollitia eos cupiditate iure! Fugiat impedit saepe officiis earum rem? Sunt porro libero nobis nisi deleniti quo iste sequi exercitationem neque natus. Qui, temporibus perferendis nostrum, eligendi dolor pariatur similique at voluptate ipsum voluptatem dignissimos soluta corrupti illo nulla fugit culpa cupiditate repellat explicabo. Natus quibusdam sed obcaecati consectetur dignissimos necessitatibus maxime, eveniet tenetur voluptatum vero cumque fuga nihil assumenda ea aperiam debitis amet. Maiores unde voluptatem harum ducimus aut rem earum eligendi eum non sed facilis soluta laboriosam sapiente odio neque architecto, voluptas, dignissimos debitis veniam assumenda. Ratione dicta soluta, quo iure eaque magnam, eius illum nihil ipsum necessitatibus inventore reiciendis similique ut voluptas tempora. Ullam atque nam ea, repudiandae architecto adipisci sed dignissimos maiores harum aliquid culpa doloribus modi, non deleniti consectetur impedit itaque. Dolorem blanditiis recusandae magnam molestiae, deleniti illo minus doloremque ut laudantium sapiente unde tempora sequi, ipsam similique nulla nesciunt? Ratione voluptatum inventore eveniet officia iure ea iusto hic ducimus, saepe dolore magnam quia ex ullam modi illo quidem? Quae, voluptatum facere labore doloribus tempore explicabo tenetur obcaecati dolorem vitae hic incidunt! Ipsam, ex voluptate eos aspernatur accusamus officiis dolores, unde sit, non delectus dignissimos. Eum laborum non mollitia provident atque cum necessitatibus ipsa expedita dolores voluptate sed recusandae reprehenderit, quaerat porro? Architecto magni, labore aliquid recusandae molestiae quisquam distinctio saepe provident. Deserunt maiores consectetur officiis nulla perspiciatis iure quisquam numquam at neque soluta, illo distinctio unde esse reprehenderit, doloribus ullam odit omnis ex nemo, quam dicta suscipit. Odit eligendi magni optio nobis repellat corporis quia ratione, voluptate, totam id, quos ipsa? Ipsum, doloremque qui? Aperiam accusamus necessitatibus cum rerum molestiae libero magni quidem nihil. Unde labore animi iure facilis, distinctio commodi magnam eius laborum. Quae suscipit, laudantium rem cupiditate nulla nemo libero aliquam accusamus recusandae id dolorem ut odit minima sapiente obcaecati inventore perspiciatis saepe porro ullam omnis provident at. Exercitationem natus dolore voluptatem aut ducimus molestias minima vel, nostrum incidunt sequi nihil eum. Error porro deleniti molestias architecto molestiae sed perspiciatis corporis quas ipsam quis nemo dolorum quia consectetur modi accusantium, non minus cupiditate quod saepe recusandae sequi, adipisci accusamus consequuntur? Voluptatem distinctio enim dolore quod impedit, nostrum quasi minima dignissimos, quis sequi odit, ipsum molestias voluptas! Possimus inventore minima nobis minus. Nihil temporibus impedit obcaecati, ratione fuga veritatis sed et a nesciunt animi quibusdam facilis voluptatum ea consectetur velit sapiente itaque similique beatae cumque placeat ab rerum repudiandae magnam. Voluptatum quos eaque ratione fugiat illum architecto provident doloremque molestiae cupiditate quam corrupti expedita aliquam placeat nostrum consequatur repellat vel, omnis mollitia. Est sapiente voluptas similique distinctio, dolorem sunt repudiandae placeat laudantium quidem quia. Saepe consectetur perferendis repellendus eligendi optio mollitia illum, neque delectus earum aut odio laudantium expedita voluptate ratione est alias quia! Maxime expedita sed nostrum est exercitationem excepturi eos fugit ut molestias quasi corporis nemo, ex, iusto autem? Fugiat, reprehenderit. Animi aliquam mollitia nobis quo itaque saepe rerum, tempore dolore magni nihil eius corporis labore dolores ipsam ipsa ullam doloremque! Possimus perferendis officiis neque facilis eveniet temporibus itaque natus, voluptatibus aspernatur. Esse impedit, adipisci, ratione repellendus id eligendi ipsa nihil beatae repudiandae consequatur nisi laudantium qui? Voluptatum hic et totam eum assumenda esse dolores eos fugit itaque nostrum rerum aperiam, quaerat, deleniti aspernatur debitis ad animi pariatur quas inventore ipsa nam omnis! Aperiam, animi! Qui totam molestiae asperiores aut earum repudiandae velit voluptates, magnam quaerat est numquam reiciendis iusto autem aspernatur ad debitis impedit! Molestias, impedit accusantium nulla deserunt ex iste unde pariatur fuga minus voluptate consequuntur ab obcaecati vitae, quod iure ducimus officia officiis hic maiores ipsa architecto in nemo dolores? Placeat omnis, maxime modi totam, officia tenetur obcaecati dolor ipsum aperiam aut temporibus. Magnam ipsum id exercitationem labore asperiores animi vel veniam accusamus eius explicabo fugiat pariatur, consectetur esse minus corrupti est? Labore, illum exercitationem? Vero recusandae amet consequatur nemo, iste aliquam, corporis nihil, adipisci repellat dignissimos doloribus quam expedita magnam suscipit rerum. Sed iure repellat ullam explicabo, facilis ipsam quisquam provident vero quasi exercitationem mollitia natus vitae ratione. Fuga ex voluptas eaque dicta, nesciunt ducimus deleniti officia eos labore. Quibusdam, itaque? Necessitatibus exercitationem velit nemo magni asperiores autem harum, in repudiandae, optio nisi porro non alias deleniti voluptatum nihil quos perspiciatis veniam eius molestias dolorum, quam eveniet dolorem suscipit aut? Alias illo impedit in enim fugit mollitia harum sequi sed tempora cumque nulla omnis esse, distinctio repellendus iure fugiat quia doloremque hic ullam maxime vero nemo? Praesentium aspernatur ipsam molestias delectus, magnam nisi velit? Excepturi repudiandae, dolore eum nulla consectetur delectus magni maxime optio cupiditate rem dignissimos? Maiores inventore quae odio blanditiis eaque illum hic nam dolore animi. Odit illum aperiam magni quod laboriosam aut at atque.
            </div>
        </>
    )

}

export default Home