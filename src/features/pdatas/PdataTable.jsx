import Spinner from "../../ui/Spinner";
import PdataRow from "./PdataRow";
import { usePdatas } from "./usePdatas";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function PdataTable() {
  const { isLoading, pdatas } = usePdatas();

  if (isLoading) return <Spinner />;
  if (!pdatas.length) return <Empty resourceName="pdatas" />;

  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr ">
        <Table.Header>
          <div>Attribute</div>
          <div>Commodity</div>
          <div>Country</div>
          <div>Regions</div>
          <div>1960/1961</div>
          <div>1961/1962</div>
          <div>1962/1963</div>
          <div>1963/1964</div>
          <div>1964/1965</div>
          <div>1965/1966</div>
          <div>1966/1967</div>
          <div>1967/1968</div>
          <div>1968/1969</div>
          <div>1969/1970</div>
          <div>1970/1971</div>
          <div>1971/1972</div>
          <div>1972/1973</div>
          <div>1973/1974</div>
          <div>1974/1975</div>
          <div>1975/1976</div>
          <div>1976/1977</div>
          <div>1977/1978</div>
          <div>1978/1979</div>
          <div>1979/1980</div>
          <div>1980/1981</div>
          <div>1981/1982</div>
          <div>1982/1983</div>
          <div>1983/1984</div>
          <div>1984/1985</div>
          <div>1985/1986</div>
          <div>1986/1987</div>
          <div>1987/1988</div>
          <div>1988/1989</div>
          <div>1989/1990</div>
          <div>1990/1991</div>
          <div>1991/1992</div>
          <div>1992/1993</div>
          <div>1993/1994</div>
          <div>1994/1995</div>
          <div>1995/1996</div>
          <div>1996/1997</div>
          <div>1997/1998</div>
          <div>1998/1999</div>
          <div>1999/2000</div>
          <div>2000/2001</div>
          <div>2001/2002</div>
          <div>2002/2003</div>
          <div>2003/2004</div>
          <div>2004/2005</div>
          <div>2005/2006</div>
          <div>2006/2007</div>
          <div>2007/2008</div>
          <div>2008/2009</div>
          <div>2009/2010</div>
          <div>2010/2011</div>
          <div>2011/2012</div>
          <div>2012/2013</div>
          <div>2013/2014</div>
          <div>2014/2015</div>
          <div>2015/2016</div>
          <div>2016/2017</div>
          <div>2017/2018</div>
          <div>2018/2019</div>
          <div>2019/2020</div>
          <div>2020/2021</div>
          <div>2021/2022</div>
          <div>2022/2023</div>
          <div>2022/2023</div>

          <div></div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={pdatas}
          render={(pdata) => <PdataRow pdata={pdata} key={pdata.id} />}
        />
      </Table>
    </Menus>
  );
}

export default PdataTable;
