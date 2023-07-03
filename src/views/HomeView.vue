<template>
  <div id="home">
    <div class="main flex">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    <section id="brand_story" class="describe" ref="brandStory">
      Stavanger Ysteri ble etablert av Lise Brunborg i 2015, og ysteriet har sine røtter i tradisjonell håndverksysting. Produksjonen foregår i sentrum av Stavanger. Ysteriet er et utstillingsvindu for et nytt og bærekraftig norsk landbruk.
    </section>

    <section id="production_process">
      Stavanger Ysteri ligger i en gammel emballasjefabrikk i Stavanger Øst. Denne bydelen var en gang selve hjertet i den lokale fiske- og hermetikkindustrien, og de siste årene har flere matprodusenter og restauranter funnet tilbake til tomme og fraflyttede fabrikker. Bydelen har blitt vekket til live igjen.

      Lises interesse for ost startet med en fascinasjon for melkas potensiale for forvandling — hvordan denne søte, milde væsken, som inneholder 86% vann, kan omskapes til ost med et utall forskjellige smaker og lukter, konsistenser og egenskaper. Med bare litt variasjon i kultur, osteløpe, salting og modning skapes et ubegrenset smaksmangfold. Lise bestemte seg for å la fascinasjonen bli et livsprosjekt. Hun tok en mastergrad i ostevitenskap før hun grunnla Stavanger Ysteri.
    </section>

    <section id="event">
      Stavanger Ysteri ligger i en gammel emballasjefabrikk i Stavanger Øst. Denne bydelen var en gang selve hjertet i den lokale fiske- og hermetikkindustrien, og de siste årene har flere matprodusenter og restauranter funnet tilbake til tomme og fraflyttede fabrikker. Bydelen har blitt vekket til live igjen.
    </section>

    <section id="store">
      Lises interesse for ost startet med en fascinasjon for melkas potensiale for forvandling — hvordan denne søte, milde væsken, som inneholder 86% vann, kan omskapes til ost med et utall forskjellige smaker og lukter, konsistenser og egenskaper. Med bare litt variasjon i kultur, osteløpe, salting og modning skapes et ubegrenset smaksmangfold. Lise bestemte seg for å la fascinasjonen bli et livsprosjekt. Hun tok en mastergrad i ostevitenskap før hun grunnla Stavanger Ysteri.
    </section>
  </div>
  </template>

<script>
export default {
  mounted () {
    this.emitter.on('moveToSection', (data) => {
      const menu = data
      const sections = document.querySelectorAll('section')
      console.log(menu)
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]

        if (section.id === menu) {
          const moveToTop = section.offsetTop
          window.scrollTo(0, moveToTop)
        }
      }
    })
  }
}
</script>
