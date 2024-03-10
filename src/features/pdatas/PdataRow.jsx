import styled from "styled-components";

import Table from "../../ui/Table";

import { Flag } from "../../ui/Flag";
import { countryDict } from "../../utils/countryDict";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Pdata = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function PdataRow({ pdata }) {
  const {
    id: pdataId,
    Attribute: attribute,
    Commodity: commodity,
    Country: country,
    Regions: regions,
    "1960/1961": d19601961,
    "1961/1962": d19611962,
    "1962/1963": d19621963,
    "1963/1964": d19631964,
    "1964/1965": d19641965,
    "1965/1966": d19651966,
    "1966/1967": d19661967,
    "1967/1968": d19671968,
    "1968/1969": d19681969,
    "1969/1970": d19691970,
    "1970/1971": d19701971,
    "1971/1972": d19711972,
    "1972/1973": d19721973,
    "1973/1974": d19731974,
    "1974/1975": d19741975,
    "1975/1976": d19751976,
    "1976/1977": d19761977,
    "1977/1978": d19771978,
    "1978/1979": d19781979,
    "1979/1980": d19791980,
    "1980/1981": d19801981,
    "1981/1982": d19811982,
    "1982/1983": d19821983,
    "1983/1984": d19831984,
    "1984/1985": d19841985,
    "1985/1986": d19851986,
    "1986/1987": d19861987,
    "1987/1988": d19871988,
    "1988/1989": d19881989,
    "1989/1990": d19891990,
    "1990/1991": d19901991,
    "1991/1992": d19911992,
    "1992/1993": d19921993,
    "1993/1994": d19931994,
    "1994/1995": d19941995,
    "1995/1996": d19951996,
    "1996/1997": d19961997,
    "1997/1998": d19971998,
    "1998/1999": d19981999,
    "1999/2000": d19992000,
    "2000/2001": d20002001,
    "2001/2002": d20012002,
    "2002/2003": d20022003,
    "2003/2004": d20032004,
    "2004/2005": d20042005,
    "2005/2006": d20052006,
    "2006/2007": d20062007,
    "2007/2008": d20072008,
    "2008/2009": d20082009,
    "2009/2010": d20092010,
    "2010/2011": d20102011,
    "2011/2012": d20112012,
    "2012/2013": d20122013,
    "2013/2014": d20132014,
    "2014/2015": d20142015,
    "2015/2016": d20152016,
    "2016/2017": d20162017,
    "2017/2018": d20172018,
    "2018/2019": d20182019,
    "2019/2020": d20192020,
    "2020/2021": d20202021,
    "2021/2022": d20212022,
    "2022/2023": d20222023,
  } = pdata;

  return (
    <Table.Row>
      <Pdata>{attribute}</Pdata>
      <div>{commodity}</div>
      <Price>
        {" "}
        {country}{" "}
        <span>
          <Flag
            src={`https://flagsapi.com/${countryDict[country]}/shiny/64.png`}
            alt={`Flag of ${country}`}
          />
        </span>
      </Price>

      <Discount>{regions}</Discount>
      <div>{d19601961}</div>
      <div>{d19611962}</div>
      <div>{d19621963}</div>
      <div>{d19631964}</div>
      <div>{d19641965}</div>
      <div>{d19651966}</div>
      <div>{d19661967}</div>
      <div>{d19671968}</div>
      <div>{d19681969}</div>
      <div>{d19691970}</div>
      <div>{d19701971}</div>
      <div>{d19711972}</div>
      <div>{d19721973}</div>
      <div>{d19731974}</div>
      <div>{d19741975}</div>
      <div>{d19751976}</div>
      <div>{d19761977}</div>
      <div>{d19771978}</div>
      <div>{d19781979}</div>
      <div>{d19791980}</div>
      <div>{d19801981}</div>
      <div>{d19811982}</div>
      <div>{d19821983}</div>
      <div>{d19831984}</div>
      <div>{d19841985}</div>
      <div>{d19851986}</div>
      <div>{d19861987}</div>
      <div>{d19871988}</div>
      <div>{d19881989}</div>
      <div>{d19891990}</div>
      <div>{d19901991}</div>
      <div>{d19911992}</div>
      <div>{d19921993}</div>
      <div>{d19931994}</div>
      <div>{d19941995}</div>
      <div>{d19951996}</div>
      <div>{d19961997}</div>
      <div>{d19971998}</div>
      <div>{d19981999}</div>
      <div>{d19992000}</div>
      <div>{d20002001}</div>
      <div>{d20012002}</div>
      <div>{d20022003}</div>
      <div>{d20032004}</div>
      <div>{d20042005}</div>
      <div>{d20052006}</div>
      <div>{d20062007}</div>
      <div>{d20072008}</div>
      <div>{d20082009}</div>
      <div>{d20092010}</div>
      <div>{d20102011}</div>
      <div>{d20112012}</div>
      <div>{d20122013}</div>
      <div>{d20132014}</div>
      <div>{d20142015}</div>
      <div>{d20152016}</div>
      <div>{d20162017}</div>
      <div>{d20172018}</div>
      <div>{d20182019}</div>
      <div>{d20192020}</div>
      <div>{d20202021}</div>
      <div>{d20212022}</div>
      <div>{d20222023}</div>
      <div></div>
    </Table.Row>
  );
}

export default PdataRow;
