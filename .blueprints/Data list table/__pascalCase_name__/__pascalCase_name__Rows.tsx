import React from "react";
import { paths } from "config/paths";
import { useListResource } from "hooks/useListResource";
import { useHistory } from "react-router-dom";
import { Table } from "components/Table";

import {ResourceName} from "api/resources/{category}/{ResourceName}";

export type {{pascalCase name}}RowsProps = {};

export const {{pascalCase name}}Rows: React.FC<{{pascalCase name}}RowsProps> = () => {
  const urlHistory = useHistory();
  const { items: {listName} } = useListResource({ResourceName});


  const handleRowClick = ({itemName}: {ResourceName}) => {
    urlHistory.push(
      // TODO: make common method for replacing
      // params in URL. Strongly typed?
      paths.{itemName}.replace(":id", {itemName}.pk())
    );
  };

  return (
    <>
      { {listName} &&
        {listName}.map({itemName} => (
          <Table.Row
            key={ {itemName}.pk()}
            hover
            onClick={() => {
              handleRowClick({itemName});
            }}
          >
            <Table.CopyCell sortDirection="asc">{ {itemName}.id}</Table.CopyCell>
            <Table.DateTimeCell>{ {itemName}.createDate}</Table.DateTimeCell>
            <Table.DateTimeCell>{ {itemName}.updateDate}</Table.DateTimeCell>
          </Table.Row>
        ))}
    </>
  );
};
