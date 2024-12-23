import type { Schema, Struct } from '@strapi/strapi';

export interface HotelAddress extends Struct.ComponentSchema {
  collectionName: 'components_hotel_addresses';
  info: {
    displayName: '\u0410\u0434\u0440\u0435\u0441';
  };
  attributes: {
    addressLine: Schema.Attribute.String;
    cityId: Schema.Attribute.String;
    cityName: Schema.Attribute.String;
    countryCode: Schema.Attribute.String;
    latitude: Schema.Attribute.Float;
    longitude: Schema.Attribute.Float;
    postalCode: Schema.Attribute.String;
    region: Schema.Attribute.String;
    regionId: Schema.Attribute.String;
  };
}

export interface HotelAmenity extends Struct.ComponentSchema {
  collectionName: 'components_hotel_amenities';
  info: {
    displayName: '\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E';
  };
  attributes: {
    code: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HotelContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_hotel_contact_infos';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F';
  };
  attributes: {
    address: Schema.Attribute.Component<'hotel.address', false>;
    emails: Schema.Attribute.String;
    phones: Schema.Attribute.Component<'hotel.phone', true>;
  };
}

export interface HotelImage extends Struct.ComponentSchema {
  collectionName: 'components_hotel_images';
  info: {
    displayName: '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

export interface HotelOccupancyInfo extends Struct.ComponentSchema {
  collectionName: 'components_hotel_occupancy_infos';
  info: {
    displayName: '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438';
  };
  attributes: {
    adultBed: Schema.Attribute.Integer;
    childWithoutBed: Schema.Attribute.Integer;
    extraBed: Schema.Attribute.Integer;
  };
}

export interface HotelPhone extends Struct.ComponentSchema {
  collectionName: 'components_hotel_phones';
  info: {
    displayName: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
  };
  attributes: {
    phoneNumber: Schema.Attribute.String;
    remark: Schema.Attribute.String;
  };
}

export interface HotelPlacement extends Struct.ComponentSchema {
  collectionName: 'components_hotel_placements';
  info: {
    displayName: '\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    kind: Schema.Attribute.Enumeration<
      ['Adult', 'ExtraAdult', 'Child', 'ExtraChild', 'ChildBandWithoutBed']
    >;
    maxAge: Schema.Attribute.Integer;
    minAge: Schema.Attribute.Integer;
  };
}

export interface HotelPolicyInfo extends Struct.ComponentSchema {
  collectionName: 'components_hotel_policy_infos';
  info: {
    displayName: '\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F';
  };
  attributes: {
    checkInTime: Schema.Attribute.String;
    checkOutTime: Schema.Attribute.String;
  };
}

export interface HotelRatePlan extends Struct.ComponentSchema {
  collectionName: 'components_hotel_rate_plans';
  info: {
    displayName: '\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0439 \u043F\u043B\u0430\u043D';
  };
  attributes: {
    cancellationRuleId: Schema.Attribute.String;
    currency: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    extraStayRuleId: Schema.Attribute.String;
    isStayWithChildrenOnly: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    vat: Schema.Attribute.Component<'hotel.vat', false>;
  };
}

export interface HotelRoomType extends Struct.ComponentSchema {
  collectionName: 'components_hotel_room_types';
  info: {
    displayName: '\u0422\u0438\u043F \u043D\u043E\u043C\u0435\u0440\u0430';
  };
  attributes: {
    address: Schema.Attribute.Component<'hotel.address', false>;
    amenities: Schema.Attribute.Component<'hotel.amenity', true>;
    categoryCode: Schema.Attribute.String;
    categoryName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    images: Schema.Attribute.Component<'hotel.image', true>;
    name: Schema.Attribute.String;
    occupancy: Schema.Attribute.Component<'hotel.occupancy-info', false>;
    placements: Schema.Attribute.Component<'hotel.placement', true>;
    position: Schema.Attribute.Integer;
    size: Schema.Attribute.Component<'hotel.room-type-square', false>;
  };
}

export interface HotelRoomTypeSquare extends Struct.ComponentSchema {
  collectionName: 'components_hotel_room_type_squares';
  info: {
    displayName: '\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043D\u043E\u043C\u0435\u0440\u0430';
  };
  attributes: {
    value: Schema.Attribute.Integer;
  };
}

export interface HotelService extends Struct.ComponentSchema {
  collectionName: 'components_hotel_services';
  info: {
    displayName: '\u0423\u0441\u043B\u0443\u0433\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    externalId: Schema.Attribute.String;
    images: Schema.Attribute.Component<'hotel.image', true>;
    kind: Schema.Attribute.Enumeration<['Common', 'Meal']>;
    mealPlanCode: Schema.Attribute.String;
    mealPlanName: Schema.Attribute.String;
    name: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['Active', 'Inactive']>;
    vat: Schema.Attribute.Component<'hotel.vat', false>;
  };
}

export interface HotelVat extends Struct.ComponentSchema {
  collectionName: 'components_hotel_vats';
  info: {
    displayName: '\u041D\u0414\u0421';
  };
  attributes: {
    applicable: Schema.Attribute.Boolean;
    included: Schema.Attribute.Boolean;
    percent: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hotel.address': HotelAddress;
      'hotel.amenity': HotelAmenity;
      'hotel.contact-info': HotelContactInfo;
      'hotel.image': HotelImage;
      'hotel.occupancy-info': HotelOccupancyInfo;
      'hotel.phone': HotelPhone;
      'hotel.placement': HotelPlacement;
      'hotel.policy-info': HotelPolicyInfo;
      'hotel.rate-plan': HotelRatePlan;
      'hotel.room-type': HotelRoomType;
      'hotel.room-type-square': HotelRoomTypeSquare;
      'hotel.service': HotelService;
      'hotel.vat': HotelVat;
    }
  }
}
