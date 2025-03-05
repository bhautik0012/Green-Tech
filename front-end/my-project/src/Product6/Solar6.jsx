import React from "react";

function Solar6() {
  return (
    <div>
      <div className="lg:block md:hidden sm:hidden">
        <p className="text-center text-[35px] mt-[50px]">𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫</p>
        <hr className="w-[1300px] mt-[18px] border-[1px] border-gray-300 ml-[120px]" />

        <img
          className="ml-[350px] rounded-lg w-[800px] mt-[25px] mb-[50px]"
          src="public/Blog6.jpg"
        />

        <div className="ml-[170px] pr-10 text-[18px]  font-semibold">
          <p>
            A solar tracker is a device that orients a payload toward the Sun.
            Payloads are usually solar panels, parabolic troughs, Fresnel
            reflectors, lenses, or the mirrors of a heliostat.
          </p>

          <p className="mt-[10px]">
            For flat-panel photovoltaic systems, trackers are used to minimize
            the angle of incidence between the incoming sunlight and a
            photovoltaic panel, sometimes known as the cosine error. Reducing
            this angle increases the amount of energy produced from a fixed
            amount of installed power-generating capacity. In standard
            photovoltaic applications, it was predicted in 2008–2009 that
            trackers could be used in at least 85% of commercial installations
            greater than one megawatt from 2009 to 2012.
          </p>

          <p className="mt-[10px]">
            As the pricing, reliability, and performance of single-axis trackers
            have improved, the systems have been installed in an increasing
            percentage of utility-scale projects. According to data from
            WoodMackenzie/GTM Research, global solar tracker shipments hit a
            record 14.5 gigawatts in 2017. This represents growth of 32 percent
            year-over-year, with similar or greater growth projected as
            large-scale solar deployment accelerates.
          </p>

          <p className="mt-[10px]">
            In concentrator photovoltaics (CPV) and concentrated solar power
            (CSP) applications, trackers are used to enable the optical
            components in the CPV and CSP systems. The optics in concentrated
            solar applications accept the direct component of sunlight light and
            therefore must be oriented appropriately to collect energy. Tracking
            systems are found in all concentrator applications because such
            systems collect the sun's energy with maximum efficiency when the
            optical axis is aligned with incident solar radiation.
          </p>
        </div>

        <p className="ml-[170px] text-[20px] mt-[20px] text-green-500">
        𝐁𝐚𝐬𝐢𝐜 𝐜𝐨𝐧𝐜𝐞𝐩𝐭
        </p>

        <div className="ml-[170px] pr-10 text-[18px]  font-semibold mt-[10px]">
          <p className="mt-[10px]">Sunlight has two components: the "direct beam" that carries about 90% of the solar energy and the "diffuse sunlight" that carries the remainder – the diffuse portion is the blue sky on a clear day, and is a larger proportion of the total on cloudy days. As the majority of the energy is in the direct beam, maximizing collection requires the Sun to be visible to the panels for as long as possible. However, on cloudier days the ratio of direct vs. diffuse light can be as low as 60:40 or even lower.</p>

          <p className="mt-[10px]">The energy contributed by the direct beam drops off with the cosine of the angle between the incoming light and the panel. In addition, the reflectance (averaged across all polarizations) is approximately constant for angles of incidence up to around 50°, beyond which reflectance increases rapidly.</p>
        </div>
        
        <p className="ml-[170px] text-[20px] mt-[20px] text-green-500">𝐒𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 𝐢𝐧𝐭𝐞𝐫𝐜𝐞𝐩𝐭𝐞𝐝</p>

        <div className="ml-[170px] pr-10 text-[18px]  font-semibold mt-[10px]">
          <p>The amount of solar energy available for collection from the direct beam is the amount of light intercepted by the panel. This is given by the area of the panel multiplied by the cosine of the angle of incidence of the direct beam (see illustration above). Put another way, the energy intercepted is equivalent to the area of the shadow cast by the panel onto a surface perpendicular to the direct beam.</p>

          <p>This cosine relationship is very closely related to the observation formalized in 1760 by Lambert's cosine law. This describes that the observed brightness of an object is proportional to the cosine of the angle of incidence of the light illuminating it.</p>
        </div>
        
      </div>
      
      {/* middle screen  */}

      <div className="lg:hidden md:block sm:hidden">
        <p className="text-center text-[35px] mt-[50px]">𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫</p>
        <hr className="w-[700px] mt-[18px] border-[1px] border-gray-300 ml-[20px]" />

        <img
          className="ml-[20px] rounded-lg w-[700px] mt-[25px] mb-[50px]"
          src="public/Blog6.jpg"
        />

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold">
          <p>
            A solar tracker is a device that orients a payload toward the Sun.
            Payloads are usually solar panels, parabolic troughs, Fresnel
            reflectors, lenses, or the mirrors of a heliostat.
          </p>

          <p className="mt-[10px]">
            For flat-panel photovoltaic systems, trackers are used to minimize
            the angle of incidence between the incoming sunlight and a
            photovoltaic panel, sometimes known as the cosine error. Reducing
            this angle increases the amount of energy produced from a fixed
            amount of installed power-generating capacity. In standard
            photovoltaic applications, it was predicted in 2008–2009 that
            trackers could be used in at least 85% of commercial installations
            greater than one megawatt from 2009 to 2012.
          </p>

          <p className="mt-[10px]">
            As the pricing, reliability, and performance of single-axis trackers
            have improved, the systems have been installed in an increasing
            percentage of utility-scale projects. According to data from
            WoodMackenzie/GTM Research, global solar tracker shipments hit a
            record 14.5 gigawatts in 2017. This represents growth of 32 percent
            year-over-year, with similar or greater growth projected as
            large-scale solar deployment accelerates.
          </p>

          <p className="mt-[10px]">
            In concentrator photovoltaics (CPV) and concentrated solar power
            (CSP) applications, trackers are used to enable the optical
            components in the CPV and CSP systems. The optics in concentrated
            solar applications accept the direct component of sunlight light and
            therefore must be oriented appropriately to collect energy. Tracking
            systems are found in all concentrator applications because such
            systems collect the sun's energy with maximum efficiency when the
            optical axis is aligned with incident solar radiation.
          </p>
        </div>

        <p className="ml-[20px] text-[20px] mt-[20px] text-green-500">
        𝐁𝐚𝐬𝐢𝐜 𝐜𝐨𝐧𝐜𝐞𝐩𝐭
        </p>

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold mt-[10px]">
          <p className="mt-[10px]">Sunlight has two components: the "direct beam" that carries about 90% of the solar energy[6][7] and the "diffuse sunlight" that carries the remainder – the diffuse portion is the blue sky on a clear day, and is a larger proportion of the total on cloudy days. As the majority of the energy is in the direct beam, maximizing collection requires the Sun to be visible to the panels for as long as possible. However, on cloudier days the ratio of direct vs. diffuse light can be as low as 60:40 or even lower.</p>

          <p className="mt-[10px]">The energy contributed by the direct beam drops off with the cosine of the angle between the incoming light and the panel. In addition, the reflectance (averaged across all polarizations) is approximately constant for angles of incidence up to around 50°, beyond which reflectance increases rapidly.</p>
        </div>
        
        <p className="ml-[20px] text-[20px] mt-[20px] text-green-500">𝐒𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 𝐢𝐧𝐭𝐞𝐫𝐜𝐞𝐩𝐭𝐞𝐝</p>

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold mt-[10px] mb-[50px]">
          <p>The amount of solar energy available for collection from the direct beam is the amount of light intercepted by the panel. This is given by the area of the panel multiplied by the cosine of the angle of incidence of the direct beam (see illustration above). Put another way, the energy intercepted is equivalent to the area of the shadow cast by the panel onto a surface perpendicular to the direct beam.</p>

          <p>This cosine relationship is very closely related to the observation formalized in 1760 by Lambert's cosine law. This describes that the observed brightness of an object is proportional to the cosine of the angle of incidence of the light illuminating it.</p>
        </div>
        
      </div>

      {/* small screen  */}

      <div className="lg:hidden md:hidden sm:block">
        <p className="text-center text-[35px] mt-[50px]">𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫</p>
        <hr className="w-[370px] mt-[18px] border-[1px] border-gray-300 ml-[20px]" />

        <img
          className="ml-[20px] rounded-lg w-[370px] mt-[25px] mb-[50px]"
          src="public/Blog6.jpg"
        />

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold">
          <p>
            A solar tracker is a device that orients a payload toward the Sun.
            Payloads are usually solar panels, parabolic troughs, Fresnel
            reflectors, lenses, or the mirrors of a heliostat.
          </p>

          <p className="mt-[10px]">
            For flat-panel photovoltaic systems, trackers are used to minimize
            the angle of incidence between the incoming sunlight and a
            photovoltaic panel, sometimes known as the cosine error. Reducing
            this angle increases the amount of energy produced from a fixed
            amount of installed power-generating capacity. In standard
            photovoltaic applications, it was predicted in 2008–2009 that
            trackers could be used in at least 85% of commercial installations
            greater than one megawatt from 2009 to 2012.
          </p>

          <p className="mt-[10px]">
            As the pricing, reliability, and performance of single-axis trackers
            have improved, the systems have been installed in an increasing
            percentage of utility-scale projects. According to data from
            WoodMackenzie/GTM Research, global solar tracker shipments hit a
            record 14.5 gigawatts in 2017. This represents growth of 32 percent
            year-over-year, with similar or greater growth projected as
            large-scale solar deployment accelerates.
          </p>

          <p className="mt-[10px]">
            In concentrator photovoltaics (CPV) and concentrated solar power
            (CSP) applications, trackers are used to enable the optical
            components in the CPV and CSP systems. The optics in concentrated
            solar applications accept the direct component of sunlight light and
            therefore must be oriented appropriately to collect energy. Tracking
            systems are found in all concentrator applications because such
            systems collect the sun's energy with maximum efficiency when the
            optical axis is aligned with incident solar radiation.
          </p>
        </div>

        <p className="ml-[20px] text-[20px] mt-[20px] text-green-500">
        𝐁𝐚𝐬𝐢𝐜 𝐜𝐨𝐧𝐜𝐞𝐩𝐭
        </p>

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold mt-[10px]">
          <p className="mt-[10px]">Sunlight has two components: the "direct beam" that carries about 90% of the solar energy[6][7] and the "diffuse sunlight" that carries the remainder – the diffuse portion is the blue sky on a clear day, and is a larger proportion of the total on cloudy days. As the majority of the energy is in the direct beam, maximizing collection requires the Sun to be visible to the panels for as long as possible. However, on cloudier days the ratio of direct vs. diffuse light can be as low as 60:40 or even lower.</p>

          <p className="mt-[10px]">The energy contributed by the direct beam drops off with the cosine of the angle between the incoming light and the panel. In addition, the reflectance (averaged across all polarizations) is approximately constant for angles of incidence up to around 50°, beyond which reflectance increases rapidly.</p>
        </div>
        
        <p className="ml-[20px] text-[20px] mt-[20px] text-green-500">𝐒𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 𝐢𝐧𝐭𝐞𝐫𝐜𝐞𝐩𝐭𝐞𝐝</p>

        <div className="ml-[20px] pr-10 text-[18px]  font-semibold mt-[10px]">
          <p>The amount of solar energy available for collection from the direct beam is the amount of light intercepted by the panel. This is given by the area of the panel multiplied by the cosine of the angle of incidence of the direct beam (see illustration above). Put another way, the energy intercepted is equivalent to the area of the shadow cast by the panel onto a surface perpendicular to the direct beam.</p>

          <p>This cosine relationship is very closely related to the observation formalized in 1760 by Lambert's cosine law. This describes that the observed brightness of an object is proportional to the cosine of the angle of incidence of the light illuminating it.</p>
        </div>
        
      </div>


      
    </div>
  );
}

export default Solar6;
