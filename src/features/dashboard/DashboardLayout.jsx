import styled from "styled-components";

import Spinner from "../../ui/Spinner";

import { usePdatas } from "../pdatas/usePdatas";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts/lib";
import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import { useSearchParams } from "react-router-dom";
const arrayYears = [
  "1960/1961",
  "1961/1962",
  "1962/1963",
  "1963/1964",
  "1964/1965",
  "1965/1966",
  "1966/1967",
  "1967/1968",
  "1968/1969",
  "1969/1970",
  "1970/1971",
  "1971/1972",
  "1972/1973",
  "1973/1974",
  "1974/1975",
  "1975/1976",
  "1976/1977",
  "1977/1978",
  "1978/1979",
  "1979/1980",
  "1980/1981",
  "1981/1982",
  "1982/1983",
  "1983/1984",
  "1984/1985",
  "1985/1986",
  "1986/1987",
  "1987/1988",
  "1988/1989",
  "1989/1990",
  "1990/1991",
  "1991/1992",
  "1992/1993",
  "1993/1994",
  "1994/1995",
  "1995/1996",
  "1996/1997",
  "1997/1998",
  "1998/1999",
  "1999/2000",
  "2000/2001",
  "2001/2002",
  "2002/2003",
  "2003/2004",
  "2004/2005",
  "2005/2006",
  "2006/2007",
  "2007/2008",
  "2008/2009",
  "2009/2010",
  "2010/2011",
  "2011/2012",
  "2012/2013",
  "2013/2014",
  "2014/2015",
  "2015/2016",
  "2016/2017",
  "2017/2018",
  "2018/2019",
  "2019/2020",
  "2020/2021",
  "2021/2022",
  "2022/2023",
];
const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("last") || "";
  const { pdatas, isLoading1 } = usePdatas();
  if (isLoading1) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Row>
        <h1 className="">GRAPH</h1>
        <br />
        <Filter
          filterField="last"
          options={arrayYears.map((e) => {
            return { value: e, label: e };
          })}
        />
      </Row>
      <Row type="horizontal">
        <AreaChart data={pdatas} height={1200} width={3000}>
          <XAxis dataKey="Country" />
          <YAxis unit="" />
          <CartesianGrid />
          <Tooltip />
          <Area
            dataKey={filterValue || "1960/1961"}
            type="monotone"
            stroke="red"
            fill="orange"
          />
        </AreaChart>
      </Row>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
