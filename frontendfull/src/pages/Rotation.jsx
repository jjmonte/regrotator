import React, { useContext, useState, useEffect } from 'react';
import { NavElement, MainWrapper, SecondaryWrapperList } from './PagesElements';

import { AlbumContext } from '../contextComponents/AlbumContext';
import SortBar from '../components/SortBar';
import CategoryFilter from '../components/CategoryFilter';
import AlbumLinkItem from '../components/AlbumLinkItem';

function Rotation(props) {
  const [albums, setAlbums] = useContext(AlbumContext);
  const [category, setCategory] = useState('ALL');
  const [sortType, setSortType] = useState('category');
  const [sortOrder, setSortOrder] = useState('descending');

  const rotationList = albums
    // .filter(album => album.Rotation_flag === props.rotationFlag)   //Not enough sample data, so disabling for now
    .filter(album => category === 'ALL' || category === album.Category);

  switch (sortType) {
    case 'artist':
      console.log('sorting by Artist');
      rotationList.sort(compareArtist);
      break;
    case 'album':
      console.log('sorting by Album_title');
      rotationList.sort(compareAlbum);
      break;
    case 'category':
      console.log('sorting by Category');
      rotationList.sort(compareCategory);
      break;
    case 'date':
      console.log('sorting by Add_date');
      rotationList.sort(compareDate);
      break;
    default:
      console.log('whoopsiedaisy');
  }

  useEffect(() => {
    document.title = `RegRotator: ${props.pageTitle}`;
  });

  const mappedRotationList = rotationList.map(album => {
    return (
      <AlbumLinkItem
        key={album.Album_id}
        artist={album.Artist}
        album_id={album.Album_id}
        album_title={album.Album_title}
        category={album.Category}
      />
    );
  });

  console.log(rotationList);
  return (
    <React.Fragment>
      <NavElement>
        <span>{props.navElementTitle}</span>
      </NavElement>
      <MainWrapper>
        <SortBar
          sortType={sortType}
          setSortType={setSortType}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          useAllCategories={category === 'ALL'}
        />
        <CategoryFilter category={category} setCategory={setCategory} />
        <SecondaryWrapperList needsTopSpace={true}>
          {sortOrder === 'ascending' ? mappedRotationList.reverse() : mappedRotationList}
        </SecondaryWrapperList>
      </MainWrapper>
    </React.Fragment>
  );
}
//Helper functions for use in arrays.prototype.sort(compare function)
//Should probably move helper functions like these into a seperate folder
//for readability, but I don't wanna !!
function compareArtist(a, b) {
  if (a.Artist.toUpperCase() < b.Artist.toUpperCase()) {
    return -1;
  }
  if (a.Artist.toUpperCase() > b.Artist.toUpperCase()) {
    return 1;
  }
  return 0;
}
function compareAlbum(a, b) {
  if (a.Album_title.toUpperCase() < b.Album_title.toUpperCase()) {
    return -1;
  }
  if (a.Album_title.toUpperCase() > b.Album_title.toUpperCase()) {
    return 1;
  }
  return 0;
}
function compareDate(a, b) {
  return a.Add_date - b.Add_date;
}
const CategoryOrdering = {},
  sortDefaultOrder = ['H', 'M', 'L', 'A', ''];
for (var i = 0; i < sortDefaultOrder.length; i++) CategoryOrdering[sortDefaultOrder[i]] = i;
function compareCategory(a, b) {
  return (
    CategoryOrdering[a.Category] - CategoryOrdering[b.Category] || a.Artist.localeCompare(b.Artist)
  );
}

export default Rotation;
