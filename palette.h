#ifndef JUNIRO_HPP
#define JUNIRO_HPP

#include <cstdint>

namespace juniro {

struct color_t {
    uint8_t r;
    uint8_t g;
    uint8_t b;
};

static constexpr color_t jan_clear_ice          { 61, 190, 210 };  // #3dbed2
static constexpr color_t feb_budding_shore      { 64, 195, 174 };  // #40c3ae
static constexpr color_t mar_sprouting_fields   { 90, 197, 119 };  // #5ac577
static constexpr color_t apr_young_rice         { 160, 185, 59 };  // #a0b93b
static constexpr color_t may_early_grain        { 204, 167, 55 };  // #cca737
static constexpr color_t jun_summer_sol         { 234, 149, 73 };  // #ea9549
static constexpr color_t jul_heat_haze          { 242, 138, 122 }; // #f28a7a
static constexpr color_t aug_evening_festival   { 244, 129, 168 }; // #f481a8
static constexpr color_t sep_purple_dew         { 227, 130, 220 }; // #e382dc
static constexpr color_t oct_chrysanthemum_moon { 185, 150, 245 }; // #b996f5
static constexpr color_t nov_early_frost        { 143, 168, 243 }; // #8fa8f3
static constexpr color_t dec_winter_sky         { 93, 181, 239 };  // #5db5ef

static constexpr color_t indexed[ 12 ] = {
    jan_clear_ice,
    feb_budding_shore,
    mar_sprouting_fields,
    apr_young_rice,
    may_early_grain,
    jun_summer_sol,
    jul_heat_haze,
    aug_evening_festival,
    sep_purple_dew,
    oct_chrysanthemum_moon,
    nov_early_frost,
    dec_winter_sky
};

};   //  ::juniro

#endif // JUNIRO_HPP