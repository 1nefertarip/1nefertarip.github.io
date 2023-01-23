library(RSocrata)
df <- read.socrata("https://data.cityofnewyork.us/resource/be8n-q3nj.csv")

# for faster access in local drive
# library(readr)
# df <- read_delim("data/Noise_Complaints__in_2017_.csv",
#            delim = ";", escape_double = FALSE, trim_ws = TRUE)
# #nrow(df)

library(ggplot2)
library(dplyr)
cleantable <- df %>%
  select(
    ID = Unique.Key,
    type = Complaint.Type,
    desc = Descriptor,
    city = City,
    date = Created.Date,
    lat = Latitude,
    borough= Borough,
    long = Longitude,
    location = Location
  )

# ggplot(cleantable, aes(x=factor(desc)))+
#   geom_bar(stat="count", width=0.7)+
#   theme(axis.text.x = element_text(angle = 45))

#select only Loud Music/Party

cleanparty<-cleantable%>%
  filter(desc=="Loud Music/Party")%>%
  filter(!is.na(long)) #remove


# ggplot(cleantable, aes(x=factor(borough)))+
#   geom_bar(stat="count", width=0.7)+
#   theme(axis.text.x = element_text(angle = 45))

library(leaflet)
library(leaflet.extras)
leaflet(cleanparty) %>%
  addProviderTiles(providers$OpenStreetMap.DE) %>%
  setView(lng = -73.98928, lat = 40.75042, zoom = 10) %>%
  addHeatmap(
    lng = ~long, lat = ~lat,
    radius = 5, blur=10,max=100
  )
