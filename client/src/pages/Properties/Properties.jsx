import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const propertiesData = [
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc3" },
    title: "Red Cross Blood Donation Drive",
    description: "Join us for a Red Cross blood donation drive and help save lives. Volunteers can assist with donor registration, refreshments, and providing support to donors during and after their donation.",
    price: 20,
    address: "Red Cross Headquarters, 2025 E St NW",
    city: "Washington, DC 20006",
    country: "USA",
    image: "./bb.jpeg",
    facilities: { bathrooms: "20", parking: "2", bedrooms: "1" },
    userEmail: "volunteer@redcross.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc4" },
    title: "Pomozi.ba Food Distribution",
    description: "Volunteer with Pomozi.ba to help distribute food to families in need. Volunteers will assist with sorting, packing, and distributing food items, ensuring that those in need receive essential supplies.",
    price: 40,
    address: "Pomozi.ba Center, Alipasina 45",
    city: "Sarajevo, 71000",
    country: "Bosnia and Herzegovina",
    image: "./e.jpeg",
    facilities: { bathrooms: "40", parking: "2", bedrooms: "1" },
    userEmail: "volunteer@pomozi.ba",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc5" },
    title: "Doctors Without Borders Medical Camp",
    description: "Join Doctors Without Borders in providing medical care to underserved communities. Volunteers will assist medical professionals in setting up clinics, supporting patients, and providing essential healthcare services.",
    price: 5,
    address: "Medical Camp, 123 Health St",
    city: "Kampala, 00256",
    country: "Uganda",
    image: "./dd.webp",
    facilities: { bathrooms: "5", parking: "365", bedrooms: "1" },
    userEmail: "volunteer@msf.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc6" },
    title: "UN Volunteers Youth Empowerment Workshop",
    description: "Participate in a UN Volunteers youth empowerment workshop aimed at providing young people with skills and knowledge for their personal and professional development. Volunteers will facilitate sessions, mentor participants, and support the event logistics.",
    price: 10,
    address: "UN House, 1775 K St NW",
    city: "Washington, DC 20006",
    country: "USA",
    image: "./ff.jpeg",
    facilities: { bathrooms: "10", parking: "3", bedrooms: "2" },
    userEmail: "volunteer@unv.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392d39dfd90fb29e464fb7" },
    title: "Open Beach Cleanup",
    description: "Open beach cleanup volunteering brings communities together to preserve and protect coastal environments. Volunteers of all ages can participate, making it a family-friendly and educational activity. By removing litter and debris, these efforts help maintain healthy ecosystems and promote environmental awareness.",
    price: 60,
    address: "Santa Monica Beach",
    city: "Santa Monica",
    country: "USA",
    image: "./u.webp",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { $date: "2023-04-14T10:38:48.762Z" },
    updatedAt: { $date: "2023-04-14T10:38:48.762Z" },
    facilities: { bathrooms: "60", parking: "5", bedrooms: "1" },
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fbc" },
    title: "It is raining plants!",
    description: "This planting volunteering event involves individuals coming together to plant trees, flowers, and shrubs in local parks, gardens, and public spaces. This activity not only beautifies the community but also contributes to environmental sustainability by improving air quality and supporting wildlife habitats. Volunteers gain hands-on experience in gardening while fostering a sense of stewardship and connection to nature.",
    price: 450,
    address: "Central Park Conservancy 14 E 60th St",
    city: "New York, NY 10022",
    country: "USA",
    image: "./g.jpeg",
    facilities: { bathrooms: "450", parking: "4", bedrooms: "1" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" },
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fbd" },
    title: "Beach Cleanup Extravaganza",
    description: "Join us for a beach cleanup event to help preserve and protect our coastal environments. Volunteers will work together to remove litter and debris from the beach, promoting a healthier ecosystem and a cleaner community.",
    price: 75,
    address: "Santa Monica Beach, 200 Santa Monica Pier",
    city: "Santa Monica, CA 90401",
    country: "USA",
    image: "./aa.jpg",
    facilities: { bathrooms: "75", parking: "5", bedrooms: "1" },
    userEmail: "volunteer@beachcleanup.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fbe" },
    title: "Community Garden Planting Day",
    description: "Help us plant a variety of vegetables and flowers in the community garden. This event is perfect for families and individuals who want to learn about gardening while contributing to a sustainable local food source.",
    price: 30,
    address: "Lincoln Community Garden, 1234 Lincoln Ave",
    city: "Portland, OR 97205",
    country: "USA",
    image: "./h.jpeg",
    facilities: { bathrooms: "30", parking: "1", bedrooms: "7" },
    userEmail: "info@communitygarden.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fbf" },
    title: "Park Cleanup Day",
    description: "Join our park cleanup event and help maintain the beauty and cleanliness of our local parks. Volunteers will collect trash, clear pathways, and assist in maintaining playgrounds and public spaces.",
    price: 15,
    address: "Golden Gate Park, 501 Stanyan St",
    city: "San Francisco, CA 94117",
    country: "USA",
    image: "./b.jpeg",
    facilities: { bathrooms: "15", parking: "1", bedrooms: "1" },
    userEmail: "volunteer@parkcleanup.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc0" },
    title: "River Restoration Project",
    description: "Participate in our river restoration project to help clean and restore local waterways. Volunteers will remove invasive species, plant native plants, and help improve water quality for the community.",
    price: 310,
    address: "Mississippi River, 789 River Rd",
    city: "Minneapolis, MN 55401",
    country: "USA",
    image: "./v.jpg",
    facilities: { bathrooms: "310", parking: "20", bedrooms: "15" },
    userEmail: "volunteer@riverrestoration.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc1" },
    title: "Urban Tree Planting",
    description: "Join us for an urban tree planting event to help improve air quality and provide shade in our city. Volunteers will plant trees along streets and in parks, contributing to a greener and healthier urban environment.",
    price: 840,
    address: "Downtown Chicago, 456 Michigan Ave",
    city: "Chicago, IL 60611",
    country: "USA",
    image: "./k.jpeg",
    facilities: { bathrooms: "840", parking: "15", bedrooms: "12" },
    userEmail: "volunteer@urbantreeplanting.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  {
    _id: { $oid: "64392e0bdfd90fb29e464fc2" },
    title: "Wildlife Habitat Restoration",
    description: "Help restore and protect wildlife habitats by volunteering in our restoration project. Activities include planting native species, removing invasive plants, and building structures to support local wildlife.",
    price: 120,
    address: "Everglades National Park, 40001 State Hwy 9336",
    city: "Homestead, FL 33034",
    country: "USA",
    image: "./z.jpg",
    facilities: { bathrooms: "120", parking: "5", bedrooms: "1" },
    userEmail: "volunteer@wildliferestoration.org",
    createdAt: { $date: "2023-04-14T10:42:19.231Z" },
    updatedAt: { $date: "2023-04-14T10:42:19.231Z" }
  },
  
  
  
  
  // Add the rest of the JSON data here...
];

const Properties = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {propertiesData
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((card, i) => (
              <PropertyCard card={card} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;


/*import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";

import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            data
              .filter(
                (property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <PropertyCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;*/
