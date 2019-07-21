import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { AlbumContext } from '../contextComponents/AlbumContext';
import SortBar from '../components/SortBar';
import CategoryFilter from '../components/CategoryFilter';
import AlbumItem from '../helpers/BjorkKeyframes';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 78%;
`;
const NavElement = styled.div`
  margin: 0;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.highlightColor};
  color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 7%;
  span {
    font-size: 3em;
    line-height: normal;
    letter-spacing: 0.2em;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    top: 50%;
    position: absolute;
  }
`;

const AlbumList = styled.ul`
  overflow: auto;
  height: 91%;
  width: 97%;
  padding-left: 3%;
  padding-top: 4%;
  background-color: ${props => props.theme.bwPrimary};
`;
//Please don't murder me jade
//Or do? i dunno, don't let me tell you how to live your life

const Category = styled.p`
  float: right;
  position: relative;
  width: 40px;
  margin-right: 50px;
  right: -40px;
  text-align: center;
`;

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
      <AlbumItem className={album.Artist === 'Björk' ? 'björk' : 'not_björk'} key={album.Album_id}>
        <Link
          to={`/artists/${album.Artist.replace(/\s+/g, '-').toLowerCase()}/${
            album.Album_id
          }-${album.Album_title.replace(/\s+/g, '-').toLowerCase()}/`}
        >
          {/* This only handles overly long album titles, not artist names. Need to add a case for artists like TWIABP */}
          {(album.Artist + '' + album.Album_title).length > 45
            ? `${album.Artist.toUpperCase()} - ${album.Album_title.toUpperCase().substring(
                0,
                25
              )}...`
            : `${album.Artist.toUpperCase()} - ${album.Album_title.toUpperCase()}`}
        </Link>
        <Category>{album.Category}</Category>
      </AlbumItem>
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
        <AlbumList>
          {sortOrder === 'ascending' ? mappedRotationList.reverse() : mappedRotationList}
        </AlbumList>
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
