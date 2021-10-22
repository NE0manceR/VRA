import React from 'react';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import { Link } from 'react-router-dom';
import './Partners.scss';

const partnersLogo = [
  { id: 0, src: '/img/PartnerLogo/logoCol_1001.png' },
  { id: 1, src: '/img/PartnerLogo/logoCol_4kl.png' },
  { id: 2, src: '/img/PartnerLogo/logoCol_adler.png' },
  { id: 3, src: '/img/PartnerLogo/logoCol_ag.png' },
  { id: 4, src: '/img/PartnerLogo/logoCol_agroplast.png' },
  { id: 5, src: '/img/PartnerLogo/logoCol_agym.png' },
  { id: 6, src: '/img/PartnerLogo/logoCol_alladin.png' },
  { id: 7, src: '/img/PartnerLogo/logoCol_antycor.png' },
  { id: 8, src: '/img/PartnerLogo/logoCol_arman.png' },
  { id: 9, src: '/img/PartnerLogo/logoCol_arsen.png' },
  { id: 10, src: '/img/PartnerLogo/logoCol_aviaremont.png' },
  { id: 11, src: '/img/PartnerLogo/logoCol_avto55.png' },
  { id: 12, src: '/img/PartnerLogo/logoCol_avtorska.png' },
  { id: 13, src: '/img/PartnerLogo/logoCol_bankFik.png' },
  { id: 14, src: '/img/PartnerLogo/logoCol_bankLviv.png' },
  { id: 15, src: '/img/PartnerLogo/logoCol_bankUniversal.png' },
  { id: 16, src: '/img/PartnerLogo/logoCol_bartka.png' },
  { id: 17, src: '/img/PartnerLogo/logoCol_barwinok.png' },
  { id: 18, src: '/img/PartnerLogo/logoCol_bbjewels.png' },
  { id: 19, src: '/img/PartnerLogo/logoCol_brokbiznes.png' },
  { id: 20, src: '/img/PartnerLogo/logoCol_browbar.png' },
  { id: 21, src: '/img/PartnerLogo/logoCol_bukholding.png' },
  { id: 22, src: '/img/PartnerLogo/logoCol_bulka.png' },
  { id: 23, src: '/img/PartnerLogo/logoCol_bundes.png' },
  { id: 24, src: '/img/PartnerLogo/logoCol_busavto.png' },
  { id: 25, src: '/img/PartnerLogo/logoCol_busavto2.png' },
  { id: 26, src: '/img/PartnerLogo/logoCol_cab.png' },
  { id: 27, src: '/img/PartnerLogo/logoCol_chickago.png' },
  { id: 28, src: '/img/PartnerLogo/logoCol_chr.png' },
  { id: 29, src: '/img/PartnerLogo/logoCol_cityCounsil.png' },
  { id: 30, src: '/img/PartnerLogo/logoCol_crez.png' },
  { id: 31, src: '/img/PartnerLogo/logoCol_cukor.png' },
  { id: 32, src: '/img/PartnerLogo/logoCol_dairy.png' },
  { id: 33, src: '/img/PartnerLogo/logoCol_danylo.png' },
  { id: 34, src: '/img/PartnerLogo/logoCol_dayna.png' },
  { id: 35, src: '/img/PartnerLogo/logoCol_deep.png' },
  { id: 36, src: '/img/PartnerLogo/logoCol_derevoZyttia.png' },
  { id: 37, src: '/img/PartnerLogo/logoCol_dvi.png' },
  { id: 38, src: '/img/PartnerLogo/logoCol_dzerelce.png' },
  { id: 39, src: '/img/PartnerLogo/logoCol_easymove.png' },
  { id: 40, src: '/img/PartnerLogo/logoCol_ecobudservis.png' },
  { id: 41, src: '/img/PartnerLogo/logoCol_ecoforum.png' },
  { id: 42, src: '/img/PartnerLogo/logoCol_ecoforum2.png' },
  { id: 43, src: '/img/PartnerLogo/logoCol_efort.png' },
  { id: 44, src: '/img/PartnerLogo/logoCol_ekran.png' },
  { id: 45, src: '/img/PartnerLogo/logoCol_ekspo.png' },
  { id: 46, src: '/img/PartnerLogo/logoCol_eksTur.png' },
  { id: 47, src: '/img/PartnerLogo/logoCol_elektron.png' },
  { id: 48, src: '/img/PartnerLogo/logoCol_elta.png' },
  { id: 49, src: '/img/PartnerLogo/logoCol_entekotex.png' },
  { id: 50, src: '/img/PartnerLogo/logoCol_eoforum.png' },
  { id: 51, src: '/img/PartnerLogo/logoCol_ep.png' },
  { id: 52, src: '/img/PartnerLogo/logoCol_ergo.png' },
  { id: 53, src: '/img/PartnerLogo/logoCol_ervoZahid.png' },
  { id: 54, src: '/img/PartnerLogo/logoCol_exim.png' },
  { id: 55, src: '/img/PartnerLogo/logoCol_expert.png' },
  { id: 56, src: '/img/PartnerLogo/logoCol_expressTour.png' },
  { id: 57, src: '/img/PartnerLogo/logoCol_faac.png' },
  { id: 58, src: '/img/PartnerLogo/logoCol_federacija.png' },
  { id: 59, src: '/img/PartnerLogo/logoCol_fink.png' },
  { id: 60, src: '/img/PartnerLogo/logoCol_flooriva.png' },
  { id: 61, src: '/img/PartnerLogo/logoCol_foxmart.png' },
  { id: 62, src: '/img/PartnerLogo/logoCol_foxtrot.png' },
  { id: 63, src: '/img/PartnerLogo/logoCol_galca.png' },
  { id: 64, src: '/img/PartnerLogo/logoCol_galGazo.png' },
  { id: 65, src: '/img/PartnerLogo/logoCol_genesis.png' },
  { id: 66, src: '/img/PartnerLogo/logoCol_geobud.png' },
  { id: 67, src: '/img/PartnerLogo/logoCol_geometria.png' },
  { id: 68, src: '/img/PartnerLogo/logoCol_gerb.png' },
  { id: 69, src: '/img/PartnerLogo/logoCol_global.png' },
  { id: 70, src: '/img/PartnerLogo/logoCol_goyra.png' },
  { id: 71, src: '/img/PartnerLogo/logoCol_greengarden.png' },
  { id: 72, src: '/img/PartnerLogo/logoCol_gruner.png' },
  { id: 73, src: '/img/PartnerLogo/logoCol_hamryshchak.png' },
  { id: 74, src: '/img/PartnerLogo/logoCol_herx.png' },
  { id: 75, src: '/img/PartnerLogo/logoCol_hinkalnia.png' },
  { id: 76, src: '/img/PartnerLogo/logoCol_hodoriv.png' },
  { id: 77, src: '/img/PartnerLogo/logoCol_horman.png' },
  { id: 78, src: '/img/PartnerLogo/logoCol_hranipex.png' },
  { id: 79, src: '/img/PartnerLogo/logoCol_i3.png' },
  { id: 80, src: '/img/PartnerLogo/logoCol_ibis.png' },
  { id: 81, src: '/img/PartnerLogo/logoCol_ident.png' },
  { id: 82, src: '/img/PartnerLogo/logoCol_ilm.png' },
  { id: 83, src: '/img/PartnerLogo/logoCol_imm.png' },
  { id: 84, src: '/img/PartnerLogo/logoCol_integral.png' },
  { id: 85, src: '/img/PartnerLogo/logoCol_interbud.png' },
  { id: 86, src: '/img/PartnerLogo/logoCol_interdim.png' },
  { id: 87, src: '/img/PartnerLogo/logoCol_intermarket.png' },
  { id: 88, src: '/img/PartnerLogo/logoCol_itt.png' },
  { id: 89, src: '/img/PartnerLogo/logoCol_jarda.png' },
  { id: 90, src: '/img/PartnerLogo/logoCol_jurvit.png' },
  { id: 91, src: '/img/PartnerLogo/logoCol_kapro.png' },
  { id: 92, src: '/img/PartnerLogo/logoCol_karitas.png' },
  { id: 93, src: '/img/PartnerLogo/logoCol_katedra.png' },
  { id: 94, src: '/img/PartnerLogo/logoCol_kavalier.png' },
  { id: 95, src: '/img/PartnerLogo/logoCol_kazany.png' },
  { id: 96, src: '/img/PartnerLogo/logoCol_klinker.png' },
  { id: 97, src: '/img/PartnerLogo/logoCol_klubLeva.png' },
  { id: 98, src: '/img/PartnerLogo/logoCol_kolibri.png' },
  { id: 99, src: '/img/PartnerLogo/logoCol_kon.png' },
  { id: 100, src: '/img/PartnerLogo/logoCol_konektikut.png' },
  { id: 101, src: '/img/PartnerLogo/logoCol_kpp.png' },
  { id: 102, src: '/img/PartnerLogo/logoCol_kreditprom.png' },
  { id: 103, src: '/img/PartnerLogo/logoCol_krono.png' },
  { id: 104, src: '/img/PartnerLogo/logoCol_krug.png' },
  { id: 105, src: '/img/PartnerLogo/logoCol_kumpel.png' },
  { id: 106, src: '/img/PartnerLogo/logoCol_kwintet.png' },
  { id: 107, src: '/img/PartnerLogo/logoCol_lambre.png' },
  { id: 108, src: '/img/PartnerLogo/logoCol_languageTime.png' },
  { id: 109, src: '/img/PartnerLogo/logoCol_lcb.png' },
  { id: 110, src: '/img/PartnerLogo/logoCol_lef.png' },
  { id: 111, src: '/img/PartnerLogo/logoCol_lembergFlower.png' },
  { id: 112, src: '/img/PartnerLogo/logoCol_leofit.png' },
  { id: 113, src: '/img/PartnerLogo/logoCol_leopolis.png' },
  { id: 114, src: '/img/PartnerLogo/logoCol_leoton.png' },
  { id: 115, src: '/img/PartnerLogo/logoCol_lhz.png' },
  { id: 116, src: '/img/PartnerLogo/logoCol_liderM.png' },
  { id: 117, src: '/img/PartnerLogo/logoCol_lil.png' },
  { id: 118, src: '/img/PartnerLogo/logoCol_logoGerb.png' },
  { id: 119, src: '/img/PartnerLogo/logoCol_lovato.png' },
  { id: 120, src: '/img/PartnerLogo/logoCol_loza.png' },
  { id: 121, src: '/img/PartnerLogo/logoCol_lubenetsky.png' },
  { id: 122, src: '/img/PartnerLogo/logoCol_lust.png' },
  { id: 123, src: '/img/PartnerLogo/logoCol_lviv.png' },
  { id: 124, src: '/img/PartnerLogo/logoCol_lvivavto.png' },
  { id: 125, src: '/img/PartnerLogo/logoCol_lvivgaz.png' },
  { id: 126, src: '/img/PartnerLogo/logoCol_lvivinvestavto.png' },
  { id: 127, src: '/img/PartnerLogo/logoCol_lvivlys.png' },
  { id: 128, src: '/img/PartnerLogo/logoCol_lvivshchyna.png' },
  { id: 129, src: '/img/PartnerLogo/logoCol_lvivskaHvylia.png' },
  { id: 130, src: '/img/PartnerLogo/logoCol_lvivuniver.png' },
  { id: 131, src: '/img/PartnerLogo/logoCol_lwowzimoj.png' },
  { id: 132, src: '/img/PartnerLogo/logoCol_lzgmp.png' },
  { id: 133, src: '/img/PartnerLogo/logoCol_mandaryn.png' },
  { id: 134, src: '/img/PartnerLogo/logoCol_marusia.png' },
  { id: 135, src: '/img/PartnerLogo/logoCol_masandra.png' },
  { id: 136, src: '/img/PartnerLogo/logoCol_mayak.png' },
  { id: 137, src: '/img/PartnerLogo/logoCol_mens.png' },
  { id: 138, src: '/img/PartnerLogo/logoCol_merx.png' },
  { id: 139, src: '/img/PartnerLogo/logoCol_millenium.png' },
  { id: 140, src: '/img/PartnerLogo/logoCol_mist.png' },
  { id: 141, src: '/img/PartnerLogo/logoCol_monada.png' },
  { id: 142, src: '/img/PartnerLogo/logoCol_mykolaivcement.png' },
  { id: 143, src: '/img/PartnerLogo/logoCol_namlyni.png' },
  { id: 144, src: '/img/PartnerLogo/logoCol_naozeri.png' },
  { id: 145, src: '/img/PartnerLogo/logoCol_naturehome.png' },
  { id: 146, src: '/img/PartnerLogo/logoCol_ness.png' },
  { id: 147, src: '/img/PartnerLogo/logoCol_nta.png' },
  { id: 148, src: '/img/PartnerLogo/logoCol_ny.png' },
  { id: 149, src: '/img/PartnerLogo/logoCol_obriy.png' },
  { id: 150, src: '/img/PartnerLogo/logoCol_olimpia.png' },
  { id: 151, src: '/img/PartnerLogo/logoCol_olyamak.png' },
  { id: 152, src: '/img/PartnerLogo/logoCol_olyamak2.png' },
  { id: 153, src: '/img/PartnerLogo/logoCol_onthesquare.png' },
  { id: 154, src: '/img/PartnerLogo/logoCol_op.png' },
  { id: 155, src: '/img/PartnerLogo/logoCol_opel.png' },
  { id: 156, src: '/img/PartnerLogo/logoCol_ozeroVita.png' },
  { id: 157, src: '/img/PartnerLogo/logoCol_panoramaRynku.png' },
  { id: 158, src: '/img/PartnerLogo/logoCol_panskaPodushka.png' },
  { id: 159, src: '/img/PartnerLogo/logoCol_paolla.png' },
  { id: 160, src: '/img/PartnerLogo/logoCol_pekin.png' },
  { id: 161, src: '/img/PartnerLogo/logoCol_perlynaKarpaa.png' },
  { id: 162, src: '/img/PartnerLogo/logoCol_pervak.png' },
  { id: 163, src: '/img/PartnerLogo/logoCol_podoroznyk.png' },
  { id: 164, src: '/img/PartnerLogo/logoCol_praktiker.png' },
  { id: 165, src: '/img/PartnerLogo/logoCol_premium.png' },
  { id: 166, src: '/img/PartnerLogo/logoCol_prestyzInform.png' },
  { id: 167, src: '/img/PartnerLogo/logoCol_procontrol.png' },
  { id: 168, src: '/img/PartnerLogo/logoCol_prontopizza.png' },
  { id: 169, src: '/img/PartnerLogo/logoCol_radioLux.png' },
  { id: 170, src: '/img/PartnerLogo/logoCol_radioNezaleznist.png' },
  { id: 171, src: '/img/PartnerLogo/logoCol_reben.png' },
  { id: 172, src: '/img/PartnerLogo/logoCol_redpepper.png' },
  { id: 173, src: '/img/PartnerLogo/logoCol_ribs.png' },
  { id: 174, src: '/img/PartnerLogo/logoCol_richOil.png' },
  { id: 175, src: '/img/PartnerLogo/logoCol_sali.png' },
  { id: 176, src: '/img/PartnerLogo/logoCol_salo.png' },
  { id: 177, src: '/img/PartnerLogo/logoCol_shcyt.png' },
  { id: 178, src: '/img/PartnerLogo/logoCol_sheleks.png' },
  { id: 179, src: '/img/PartnerLogo/logoCol_sportresurs.png' },
  { id: 180, src: '/img/PartnerLogo/logoCol_strans.png' },
  { id: 181, src: '/img/PartnerLogo/logoCol_tb.png' },
  { id: 182, src: '/img/PartnerLogo/logoCol_techno.png' },
  { id: 183, src: '/img/PartnerLogo/logoCol_tehmal.png' },
  { id: 184, src: '/img/PartnerLogo/logoCol_tekstyl.png' },
  { id: 185, src: '/img/PartnerLogo/logoCol_telefondovidnyk.png' },
  { id: 186, src: '/img/PartnerLogo/logoCol_teploenergo.png' },
  { id: 187, src: '/img/PartnerLogo/logoCol_tir.png' },
  { id: 188, src: '/img/PartnerLogo/logoCol_toyota.png' },
  { id: 189, src: '/img/PartnerLogo/logoCol_ucc.png' },
  { id: 190, src: '/img/PartnerLogo/logoCol_ucu.png' },
  { id: 191, src: '/img/PartnerLogo/logoCol_UDUMK.png' },
  { id: 192, src: '/img/PartnerLogo/logoCol_ufpd.png' },
  { id: 193, src: '/img/PartnerLogo/logoCol_ukrtelekom.png' },
  { id: 194, src: '/img/PartnerLogo/logoCol_ukrtelekom2.png' },
  { id: 195, src: '/img/PartnerLogo/logoCol_uliublenyy.png' },
  { id: 196, src: '/img/PartnerLogo/logoCol_ultras.png' },
  { id: 197, src: '/img/PartnerLogo/logoCol_umm.png' },
  { id: 198, src: '/img/PartnerLogo/logoCol_up.png' },
  { id: 199, src: '/img/PartnerLogo/logoCol_uz.png' },
  { id: 200, src: '/img/PartnerLogo/logoCol_valley.png' },
  { id: 201, src: '/img/PartnerLogo/logoCol_veltliner.png' },
  { id: 202, src: '/img/PartnerLogo/logoCol_vema.png' },
  { id: 203, src: '/img/PartnerLogo/logoCol_vezaVedmeza.png' },
  { id: 204, src: '/img/PartnerLogo/logoCol_viat+.png' },
  { id: 205, src: '/img/PartnerLogo/logoCol_vitalka.png' },
  { id: 206, src: '/img/PartnerLogo/logoCol_vlasta.png' },
  { id: 207, src: '/img/PartnerLogo/logoCol_vodokanal2.png' },
  { id: 208, src: '/img/PartnerLogo/logoCol_vysokyyzamok.png' },
  { id: 209, src: '/img/PartnerLogo/logoCol_wienerberger.png' },
  { id: 210, src: '/img/PartnerLogo/logoCol_windGlas.png' },
  { id: 211, src: '/img/PartnerLogo/logoCol_witcher.png' },
  { id: 212, src: '/img/PartnerLogo/logoCol_zabana.png' },
  { id: 214, src: '/img/PartnerLogo/logoCol_znaky.png' },
  { id: 215, src: '/img/PartnerLogo/logoCol_zurek.png' },
  { id: 216, src: '/img/PartnerLogo/logoCol_іщдщьшф.png' },
  { id: 217, src: '/img/PartnerLogo/logoColcelenano.png' },
  { id: 218, src: '/img/PartnerLogo/logoColhelbe.png' },
];

const Partners = () => {
  return (
    <div className="Partner">
      <div className="Hero Grid">
        <BreadCrumbs className="Hero__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/'}>Наші Клієнти</Link>
        </BreadCrumbs>
        <h5 className="Title">
          <span>Наші </span>
          <span> партнери</span>
        </h5>
        <div className="Hero__partner">
          {partnersLogo.map(({ id, src }) => {
            return (
              <div key={id} className="img-wrap">
                <img src={src} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
