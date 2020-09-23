import React, { Suspense } from "react";

import { Table } from "components/Table";
import { {{pascalCase name}}Rows } from "./{{pascalCase name}}Rows";
import { DataListSkeleton } from "components/data-list/DataListSkeleton";
import { DataListTableHeader } from "components/data-list/DataListTableHeader";

export type {{pascalCase name}}ViewProps = {};

const SKELETON_COLUMN_COUNT = 3;

export const {{pascalCase name}}: React.FC<{{pascalCase name}}ViewProps> = () => (
  <Table striped>
    <Table.Head>
      <Table.Row>
        <DataListTableHeader sortKey="id" width={400}>
          ID
        </DataListTableHeader>
        <DataListTableHeader>Created</DataListTableHeader>
        <DataListTableHeader>Updated</DataListTableHeader>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Suspense fallback={<DataListSkeleton columns={SKELETON_COLUMN_COUNT} />}>
        <{{pascalCase name}}Rows />
      </Suspense>
    </Table.Body>
  </Table>
);
