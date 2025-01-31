import type { Schema, Struct } from "@strapi/strapi";

export interface HomeArticle extends Struct.ComponentSchema {
  collectionName: "components_home_article";
  info: {
    displayName: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0442\u044C\u0438";
  };
  attributes: {
    article: Schema.Attribute.Relation<"oneToOne", "api::article.article">;
    card: Schema.Attribute.Component<"home.card", false>;
  };
}

export interface HomeCard extends Struct.ComponentSchema {
  collectionName: "components_home_card";
  info: {
    description: "";
    displayName: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430";
    icon: "file";
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<"images">;
    name: Schema.Attribute.String;
  };
}

export interface HomeHotel extends Struct.ComponentSchema {
  collectionName: "components_home_hotel";
  info: {
    displayName: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043E\u0442\u0435\u043B\u044F";
  };
  attributes: {
    card: Schema.Attribute.Component<"home.card", false>;
    hotel: Schema.Attribute.Relation<"oneToOne", "api::hotel.hotel">;
  };
}

export interface HomeHoteltype extends Struct.ComponentSchema {
  collectionName: "components_home_hoteltype";
  info: {
    displayName: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043E\u0442\u0435\u043B\u044F";
  };
  attributes: {
    card: Schema.Attribute.Component<"home.card", false>;
    hoteltype: Schema.Attribute.Relation<"oneToOne", "api::hoteltype.hoteltype">;
  };
}

export interface HomePlace extends Struct.ComponentSchema {
  collectionName: "components_home_place";
  info: {
    displayName: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F";
    icon: "pin";
  };
  attributes: {
    card: Schema.Attribute.Component<"home.card", false>;
    place: Schema.Attribute.Relation<"oneToOne", "api::place.place">;
  };
}

export interface HotelAddress extends Struct.ComponentSchema {
  collectionName: "components_hotel_address";
  info: {
    displayName: "\u0410\u0434\u0440\u0435\u0441";
    icon: "map";
  };
  attributes: {
    addressLine: Schema.Attribute.String;
    latitude: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 90;
          min: -90;
        },
        number
      >;
    longitude: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 180;
          min: -180;
        },
        number
      >;
  };
}

export interface HotelAnimal extends Struct.ComponentSchema {
  collectionName: "components_hotel_animal";
  info: {
    displayName: "\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435";
  };
  attributes: {
    byRequest: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    isAllowed: Schema.Attribute.Boolean;
    price: Schema.Attribute.Integer;
    restrictionByCount: Schema.Attribute.Integer;
    restrictionByWeight: Schema.Attribute.Integer;
  };
}

export interface HotelBed extends Struct.ComponentSchema {
  collectionName: "components_hotel_bed";
  info: {
    displayName: "\u041A\u0440\u043E\u0432\u0430\u0442\u044C";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        "\u041E\u0434\u043D\u043E\u0441\u043F\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u0414\u0432\u0443\u0441\u043F\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u041A\u0440\u043E\u0432\u0430\u0442\u044C Queen Size",
        "\u041A\u0440\u043E\u0432\u0430\u0442\u044C King Size",
        "\u0421\u0443\u043F\u0435\u0440 King Size",
        "\u041F\u043E\u043B\u0443\u0442\u043E\u0440\u043E\u0441\u043F\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u0414\u0438\u0432\u0430\u043D-\u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u0420\u0430\u0441\u043A\u043B\u0430\u0434\u0443\u0448\u043A\u0430",
        "\u0414\u0432\u0443\u0445\u044A\u044F\u0440\u0443\u0441\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u041A\u0440\u0443\u0433\u043B\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C",
        "\u0424\u0443\u0442\u043E\u043D",
        "\u041A\u0440\u043E\u0432\u0430\u0442\u044C \u0441 \u0431\u0430\u043B\u0434\u0430\u0445\u0438\u043D\u043E\u043C",
        "\u041A\u0440\u043E\u0432\u0430\u0442\u044C-\u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0435\u0440",
        "\u0414\u0435\u0442\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u043A\u0430",
        "\u041A\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u0440\u0435\u0431\u0435\u043D\u043A\u0430",
      ]
    >;
    value: Schema.Attribute.Integer;
  };
}

export interface HotelCancellationTerm extends Struct.ComponentSchema {
  collectionName: "components_hotel_cancellation_terms";
  info: {
    displayName: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0442\u043C\u0435\u043D\u044B";
    icon: "calendar-minus";
  };
  attributes: {
    day: Schema.Attribute.Integer;
    value: Schema.Attribute.Integer;
  };
}

export interface HotelContact extends Struct.ComponentSchema {
  collectionName: "components_hotel_contact";
  info: {
    displayName: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F";
  };
  attributes: {
    emailForClient: Schema.Attribute.String;
    emailForCrm: Schema.Attribute.String;
    phoneForClient: Schema.Attribute.String;
    phoneForCrm: Schema.Attribute.String;
  };
}

export interface HotelFaq extends Struct.ComponentSchema {
  collectionName: "components_hotel_faq";
  info: {
    displayName: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B";
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<"images">;
    name: Schema.Attribute.Text;
  };
}

export interface HotelPlacement extends Struct.ComponentSchema {
  collectionName: "components_hotel_placement";
  info: {
    displayName: "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435";
    icon: "size";
  };
  attributes: {
    count: Schema.Attribute.Integer;
    kind: Schema.Attribute.Enumeration<["Adult", "ExtraAdult", "Child", "ExtraChild", "ChildBandWithoutBed"]>;
    maxAge: Schema.Attribute.Integer;
    minAge: Schema.Attribute.Integer;
  };
}

export interface HotelPolicy extends Struct.ComponentSchema {
  collectionName: "components_hotel_policy";
  info: {
    displayName: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0442\u0435\u043B\u044F";
    icon: "information";
  };
  attributes: {
    animal: Schema.Attribute.Component<"hotel.animal", false>;
    checkInTime: Schema.Attribute.String;
    checkOutTime: Schema.Attribute.String;
    minDaysBeforeArrival: Schema.Attribute.Integer;
    minLengthOfStay: Schema.Attribute.Integer;
    smoking: Schema.Attribute.String;
  };
}

export interface HotelRatePlan extends Struct.ComponentSchema {
  collectionName: "components_hotel_rate_plan";
  info: {
    description: "\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043E\u0442\u0435\u043B\u044F";
    displayName: "\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D";
    icon: "dollar-sign";
  };
  attributes: {
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HotelRoomType extends Struct.ComponentSchema {
  collectionName: "components_hotel_room_type";
  info: {
    displayName: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u043C\u0435\u0440\u0430";
    icon: "bed";
  };
  attributes: {
    amenities: Schema.Attribute.Relation<"oneToMany", "api::amenity.amenity">;
    beds: Schema.Attribute.Component<"hotel.bed", true>;
    content: Schema.Attribute.Blocks;
    count: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    images: Schema.Attribute.Media<"images", true>;
    name: Schema.Attribute.String;
    occupancy: Schema.Attribute.Component<"travelline.occupancy", false>;
    placements: Schema.Attribute.Component<"hotel.placement", true>;
    size: Schema.Attribute.String;
  };
}

export interface PageOpenGraph extends Struct.ComponentSchema {
  collectionName: "components_page_open_graphs";
  info: {
    displayName: "openGraph";
    icon: "project-diagram";
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    image: Schema.Attribute.Media<"images">;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagePage extends Struct.ComponentSchema {
  collectionName: "components_page_pages";
  info: {
    description: "";
    displayName: "page";
    icon: "monitor";
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    seo: Schema.Attribute.Component<"page.seo", false>;
    slug: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
    title: Schema.Attribute.String;
  };
}

export interface PageSeo extends Struct.ComponentSchema {
  collectionName: "components_page_seos";
  info: {
    description: "";
    displayName: "SEO";
    icon: "search";
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<"images">;
    keywords: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<"page.open-graph", false>;
    referrer: Schema.Attribute.Enumeration<
      [
        "no-referrer",
        "no-referrer-when-downgrade",
        "origin",
        "origin-when-cross-origin",
        "same-origin",
        "strict-origin",
        "strict-origin-when-cross-origin",
        "unsafe-url",
      ]
    >;
    robots: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TravellineAddress extends Struct.ComponentSchema {
  collectionName: "components_travelline_address";
  info: {
    displayName: "\u0410\u0434\u0440\u0435\u0441";
    icon: "map";
  };
  attributes: {
    addressLine: Schema.Attribute.String;
    cityId: Schema.Attribute.String;
    cityName: Schema.Attribute.String;
    countryCode: Schema.Attribute.String;
    latitude: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 90;
          min: -90;
        },
        number
      >;
    longitude: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 180;
          min: -180;
        },
        number
      >;
    postalCode: Schema.Attribute.String;
    region: Schema.Attribute.String;
    regionId: Schema.Attribute.String;
    remark: Schema.Attribute.Text;
  };
}

export interface TravellineAmenity extends Struct.ComponentSchema {
  collectionName: "components_travelline_amenity";
  info: {
    displayName: "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E";
    icon: "star";
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      ["bathroom", "bedroom", "kitchen", "entertainment", "climate", "internet", "other"]
    >;
    code: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface TravellineArrivalDate extends Struct.ComponentSchema {
  collectionName: "components_travelline_arrival_date";
  info: {
    displayName: "\u0414\u0430\u0442\u044B \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F(\u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B)";
  };
  attributes: {
    endDate: Schema.Attribute.String;
    isEndless: Schema.Attribute.Boolean;
    startDate: Schema.Attribute.String;
  };
}

export interface TravellineCancellationRule extends Struct.ComponentSchema {
  collectionName: "components_travelline_cancellation_rules";
  info: {
    displayName: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0442\u043C\u0435\u043D\u044B \u041E\u0431\u0435\u0440\u0442\u043A\u0430";
    icon: "calendar-times";
  };
  attributes: {
    cancellationTerms: Schema.Attribute.Component<"travelline.cancellation-term", true>;
    externalId: Schema.Attribute.String;
    referencePointKind: Schema.Attribute.Enumeration<
      [
        "ProviderArrivalTime",
        "ProviderDepartureTime",
        "GuestArrivalTime",
        "CustomArrivalTime",
        "BookingCreationTime",
      ]
    >;
  };
}

export interface TravellineCancellationTerm extends Struct.ComponentSchema {
  collectionName: "components_travelline_cancellation_terms";
  info: {
    displayName: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0442\u043C\u0435\u043D\u044B TL";
    icon: "calendar-minus";
  };
  attributes: {
    arrivalDates: Schema.Attribute.Component<"travelline.arrival-date", true>;
    beforeArrivalMatching: Schema.Attribute.Enumeration<["NoMatter", "AtLeast", "NoMoreThan", "Between"]>;
    beforeArrivalUnit: Schema.Attribute.Enumeration<["None", "Day", "Hour"]>;
    beforeArrivalValue: Schema.Attribute.Integer;
    beforeArrivalValueMax: Schema.Attribute.Integer;
    penaltyCalculationMethod: Schema.Attribute.Enumeration<
      ["PrepaymentPercent", "FirstNights", "NoPenalty", "FirstNightPercent", "Percent", "Fixed"]
    >;
    penaltyValue: Schema.Attribute.Float;
    penaltyValueCurrency: Schema.Attribute.String;
  };
}

export interface TravellineContactInfo extends Struct.ComponentSchema {
  collectionName: "components_travelline_contact_info";
  info: {
    description: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u0435\u043B\u044F";
    displayName: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F";
    icon: "phone";
  };
  attributes: {
    address: Schema.Attribute.Component<"travelline.address", false>;
    emails: Schema.Attribute.String;
    phones: Schema.Attribute.Component<"travelline.phone", true>;
    website: Schema.Attribute.String;
  };
}

export interface TravellineOccupancy extends Struct.ComponentSchema {
  collectionName: "components_travelline_occupancy";
  info: {
    displayName: "\u0412\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C";
    icon: "size";
  };
  attributes: {
    adultBed: Schema.Attribute.Integer;
    childWithoutBed: Schema.Attribute.Integer;
    extraBed: Schema.Attribute.Integer;
  };
}

export interface TravellinePhone extends Struct.ComponentSchema {
  collectionName: "components_travelline_phone";
  info: {
    displayName: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D";
    icon: "phone";
  };
  attributes: {
    phoneNumber: Schema.Attribute.String;
    remark: Schema.Attribute.Text;
    techType: Schema.Attribute.Enumeration<
      ["mobile", "landline", "fax", "whatsapp", "Mobile", "Landline", "Fax", "Whatsapp"]
    > &
      Schema.Attribute.DefaultTo<"whatsapp">;
  };
}

export interface TravellinePlacement extends Struct.ComponentSchema {
  collectionName: "components_travelline_placement";
  info: {
    displayName: "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435";
    icon: "size";
  };
  attributes: {
    count: Schema.Attribute.Integer;
    kind: Schema.Attribute.Enumeration<["Adult", "ExtraAdult", "Child", "ExtraChild", "ChildBandWithoutBed"]>;
    maxAge: Schema.Attribute.Integer;
    minAge: Schema.Attribute.Integer;
  };
}

export interface TravellinePolicy extends Struct.ComponentSchema {
  collectionName: "components_travelline_policy";
  info: {
    displayName: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0442\u0435\u043B\u044F (TL)";
    icon: "information";
  };
  attributes: {
    checkInTime: Schema.Attribute.String;
    checkOutTime: Schema.Attribute.String;
  };
}

export interface TravellineProperty extends Struct.ComponentSchema {
  collectionName: "components_travelline_property";
  info: {
    description: "";
    displayName: "TravelLine \u0414\u0430\u043D\u043D\u044B\u0435 \u041E\u0442\u0435\u043B\u044F";
    icon: "gate";
  };
  attributes: {
    cancellationRules: Schema.Attribute.Component<"travelline.cancellation-rule", true>;
    contactInfo: Schema.Attribute.Component<"travelline.contact-info", false>;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String & Schema.Attribute.Unique;
    images: Schema.Attribute.Media<"images", true>;
    multiLocationProperty: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    policy: Schema.Attribute.Component<"travelline.policy", false>;
    ratePlans: Schema.Attribute.Component<"travelline.rate-plan", true>;
    roomTypes: Schema.Attribute.Component<"travelline.room-type", true>;
    services: Schema.Attribute.Component<"travelline.service", true>;
    stayUnitKind: Schema.Attribute.Enumeration<["NightRate", "DailyRate"]> &
      Schema.Attribute.DefaultTo<"NightRate">;
    timeZone: Schema.Attribute.String;
  };
}

export interface TravellineRatePlan extends Struct.ComponentSchema {
  collectionName: "components_travelline_rate_plan";
  info: {
    description: "\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043E\u0442\u0435\u043B\u044F";
    displayName: "\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D";
    icon: "dollar-sign";
  };
  attributes: {
    cancellationRuleId: Schema.Attribute.String;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<"RUB">;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    extraStayRuleId: Schema.Attribute.String;
    isStayWithChildrenOnly: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    vat: Schema.Attribute.Component<"travelline.vat", false>;
  };
}

export interface TravellineRoomType extends Struct.ComponentSchema {
  collectionName: "components_travelline_room_type";
  info: {
    displayName: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u043C\u0435\u0440\u0430";
    icon: "bed";
  };
  attributes: {
    address: Schema.Attribute.Component<"travelline.address", false>;
    amenities: Schema.Attribute.Component<"travelline.amenity", true>;
    categoryCode: Schema.Attribute.String;
    categoryName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    images: Schema.Attribute.Media<"images", true>;
    name: Schema.Attribute.String;
    occupancy: Schema.Attribute.Component<"travelline.occupancy", false>;
    placements: Schema.Attribute.Component<"travelline.placement", true>;
    position: Schema.Attribute.Integer;
    size: Schema.Attribute.Component<"travelline.size", false>;
  };
}

export interface TravellineService extends Struct.ComponentSchema {
  collectionName: "components_travelline_service";
  info: {
    displayName: "\u0423\u0441\u043B\u0443\u0433\u0438";
    icon: "dollar";
  };
  attributes: {
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    externalStatus: Schema.Attribute.String;
    images: Schema.Attribute.Media<"images", true>;
    kind: Schema.Attribute.Enumeration<["Common", "Meal"]>;
    mealPlanCode: Schema.Attribute.String;
    mealPlanName: Schema.Attribute.String;
    name: Schema.Attribute.String;
    vat: Schema.Attribute.Component<"travelline.vat", false>;
  };
}

export interface TravellineSize extends Struct.ComponentSchema {
  collectionName: "components_travelline_size";
  info: {
    displayName: "\u0420\u0430\u0437\u043C\u0435\u0440";
    icon: "size";
  };
  attributes: {
    unit: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface TravellineVat extends Struct.ComponentSchema {
  collectionName: "components_travelline_vat";
  info: {
    description: "\u041D\u0430\u043B\u043E\u0433\u0438 \u041E\u0442\u0435\u043B\u044F";
    displayName: "\u041D\u0430\u043B\u043E\u0433\u0438";
    icon: "dollar-sign";
  };
  attributes: {
    applicable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    included: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    percent: Schema.Attribute.Integer;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "home.article": HomeArticle;
      "home.card": HomeCard;
      "home.hotel": HomeHotel;
      "home.hoteltype": HomeHoteltype;
      "home.place": HomePlace;
      "hotel.address": HotelAddress;
      "hotel.animal": HotelAnimal;
      "hotel.bed": HotelBed;
      "hotel.cancellation-term": HotelCancellationTerm;
      "hotel.contact": HotelContact;
      "hotel.faq": HotelFaq;
      "hotel.placement": HotelPlacement;
      "hotel.policy": HotelPolicy;
      "hotel.rate-plan": HotelRatePlan;
      "hotel.room-type": HotelRoomType;
      "page.open-graph": PageOpenGraph;
      "page.page": PagePage;
      "page.seo": PageSeo;
      "travelline.address": TravellineAddress;
      "travelline.amenity": TravellineAmenity;
      "travelline.arrival-date": TravellineArrivalDate;
      "travelline.cancellation-rule": TravellineCancellationRule;
      "travelline.cancellation-term": TravellineCancellationTerm;
      "travelline.contact-info": TravellineContactInfo;
      "travelline.occupancy": TravellineOccupancy;
      "travelline.phone": TravellinePhone;
      "travelline.placement": TravellinePlacement;
      "travelline.policy": TravellinePolicy;
      "travelline.property": TravellineProperty;
      "travelline.rate-plan": TravellineRatePlan;
      "travelline.room-type": TravellineRoomType;
      "travelline.service": TravellineService;
      "travelline.size": TravellineSize;
      "travelline.vat": TravellineVat;
    }
  }
}
