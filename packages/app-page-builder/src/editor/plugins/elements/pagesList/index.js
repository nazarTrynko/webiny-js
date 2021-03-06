// @flow
import React from "react";
import type { PbElementPluginType } from "@webiny/app-page-builder/types";
import { Tab } from "@webiny/ui/Tabs";
import { ReactComponent as DesignIcon } from "./icons/round-style-24px.svg";
import { ReactComponent as FilterIcon } from "./icons/round-filter_list-24px.svg";
import { ReactComponent as PageListIcon } from "./page-list-icon.svg";
import PagesList from "./PagesList";
import PagesListFilterSettings from "./PagesListFilterSettings";
import PagesListDesignSettings from "./PagesListDesignSettings";
import styled from "@emotion/styled";

export default () => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        margin: "0 auto",
        width: 100,
        svg: {
            width: 100
        }
    });

    return [
        ({
            name: "pb-page-element-pages-list",
            type: "pb-page-element",
            elementType: "pages-list",
            toolbar: {
                title: "List of pages",
                group: "pb-editor-element-group-basic",
                preview() {
                    return (
                        <PreviewBox>
                            <PageListIcon />
                        </PreviewBox>
                    );
                }
            },
            settings: ["pb-page-element-settings-delete"],
            target: ["row", "column"],
            onCreate: "open-settings",
            create(options = {}) {
                return {
                    type: "pages-list",
                    data: {
                        resultsPerPage: 10,
                        component: "pb-page-element-pages-list-component-default",
                        settings: {
                            margin: {
                                desktop: { all: 0 },
                                mobile: { all: 0 }
                            },
                            padding: {
                                desktop: { all: 0 },
                                mobile: { all: 0 }
                            }
                        }
                    },
                    ...options
                };
            },
            render({ element }) {
                return <PagesList data={element.data} />;
            }
        }: PbElementPluginType),
        {
            name: "pb-page-element-advanced-settings-pages-list-filter",
            type: "pb-page-element-advanced-settings",
            elementType: "pages-list",
            render(props: Object) {
                return (
                    <Tab icon={<FilterIcon />} label="Filter">
                        <PagesListFilterSettings {...props} filter />
                    </Tab>
                );
            }
        },
        {
            name: "pb-page-element-advanced-settings-pages-list-design",
            type: "pb-page-element-advanced-settings",
            elementType: "pages-list",
            render(props: Object) {
                return (
                    <Tab icon={<DesignIcon />} label="Design">
                        <PagesListDesignSettings {...props} design />
                    </Tab>
                );
            }
        }
    ];
};
