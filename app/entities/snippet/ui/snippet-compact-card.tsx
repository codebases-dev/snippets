import { css, cx } from "styled-system/css";
import { Link } from "@remix-run/react";
import { Snippet } from "~/entities/snippet/model";

export interface SnippetCompactCardProps {
  snippet: Snippet;
  getUserPageLink: (snippet: Snippet) => string;
  getSnippetPageLink: (snippet: Snippet) => string;
}

export function SnippetCompactCard({
  snippet,
  getUserPageLink,
  getSnippetPageLink,
}: SnippetCompactCardProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "md",
        boxShadow: "0 0 0 1px token(colors.gray.200) inset",
        gap: "1rem",
        background: "white",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "2.25rem",
        })}
      >
        {snippet.user.imageUrl && (
          <Link
            to={getUserPageLink(snippet)}
            className={css({
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "full",
              border: "1px solid",
              borderColor: "gray.200",
              cursor: "pointer",
              overflow: "hidden",
            })}
          >
            <img src={snippet.user.imageUrl} alt="" />
          </Link>
        )}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.375,
            overflow: "hidden",
          })}
        >
          <Link
            to={getUserPageLink(snippet)}
            className={css({
              fontSize: "sm",
              fontWeight: "semibold",
              color: "gray.800",
              paddingLeft: "0.25rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "pointer",
              _hover: {
                textDecoration: "underline",
              },
            })}
          >
            {snippet.user.displayName}
          </Link>
          <div
            className={css({
              fontSize: "0.6875rem",
              color: "gray.600",
              paddingLeft: "0.25rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            {snippet.postedAt}
          </div>
        </div>
      </div>
      <Link to={getSnippetPageLink(snippet)}>
        <h2
          className={css({
            marginY: "-0.125rem",
            fontSize: "xl",
            fontWeight: "bold",
            lineHeight: "1.5rem",
            color: "gray.800",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            cursor: "pointer",
            _hover: {
              opacity: 0.75,
            },
          })}
        >
          {snippet.title}
        </h2>
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: snippet.highlightedCodeHtml }}
        className={cx(
          css({
            borderRadius: "0.5rem",
            overflow: "hidden",
            boxSizing: "border-box",
            fontSize: "0.833rem",
            lineHeight: "1.5rem",
            "& pre": {
              paddingX: "1rem",
              paddingY: "0.75rem",
            },
          })
        )}
      />
    </div>
  );
}
